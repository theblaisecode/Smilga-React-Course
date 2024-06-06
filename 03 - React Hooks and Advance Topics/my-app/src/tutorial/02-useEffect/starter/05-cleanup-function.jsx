import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  function handleClick() {
    setValue((prevValue) => !prevValue);
  }

  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={handleClick}>
        Toggle
      </button>
      {value && <SecondComponent />}
    </>
  );
};

const SecondComponent = () => {
  // useEffect(() => {
  //   console.log("Olla");

  //   const setIn = setInterval(() => {
  //     console.log("Olla Blaise");
  //   }, 1000);

  //   // Cleanup function
  //   return () => {
  //     clearInterval(setIn);
  //   };
  // }, []);

  useEffect(() => {
    function cleanUpExample() {}

    window.addEventListener("scroll", cleanUpExample);

    // Cleanup Function
    return () => {
      window.removeEventListener("scroll", cleanUpExample);
    };
  }, []);

  return (
    <>
      <h4>Hello there</h4>
    </>
  );
};

export default CleanupFunction;

/**
  ----------------------------------------------------------------------------------
  -- INSTANCES WHEN useEffect() CLEANUP FUNCTION IS NEEDED --
  ----------------------------------------------------------------------------------

 *The useEffect clean up function is used whenever you have operations within your `useEffect` hook that need to be tidied up to prevent unwanted behavior or resource leaks when the component unmounts or before the effect re-runs due to changes in its dependencies. Specifically, you should consider using a cleanup function in the following scenarios:

  1. **Adding and Removing Event Listeners**: If you attach event listeners to the DOM or other objects like WebSocket connections, you need to remove them when the component unmounts to avoid memory leaks and potential bugs due to multiple listeners being attached unnecessarily.

  2. **Subscription-based Services**: When your component subscribes to external data sources (like APIs, custom events, or observables), you should unsubscribe or disconnect to prevent updates to the component after it has unmounted.

  3. **Timers and Intervals**: Cleanup is necessary for any `setTimeout` or `setInterval` to clear these timers if the component unmounts before the timer completes. This prevents the callback functions from being called even after the component is no longer in the DOM.

  4. **External Library Integrations**: If you use external libraries that require a cleanup procedure (such as data fetching libraries, graphics or charting libraries with their own DOM manipulations, or listening mechanisms), you should adhere to those libraries' cleanup recommendations to prevent memory leaks.

  5. **Manual DOM Manipulations**: When your component manually changes the DOM (though generally discouraged in React), these changes should be reverted when the component unmounts to keep the DOM clean.

  6. **Web Workers or Background Threads**: If you initiate web workers for background processing, terminating them during the cleanup phase prevents them from running indefinitely.

  7. **Heavy Computations or Resources**: If your component initializes resources that are computationally expensive or hold significant memory/CPU, these should be appropriately halted and cleaned up to ensure they don't continue to consume resources.

  8. **Promise or Fetch Operations**: When dealing with asynchronous operations like fetch API requests, cleaning up might involve cancelling these requests if they are no longer needed to prevent setting state on an unmounted component.

  Knowing when to use a cleanup function in `useEffect` is mostly about understanding the lifecycle of your component and managing resources efficiently. It's about ensuring that any side effects introduced by the component do not extend beyond the lifespan of the component itself, thus adhering to good React practices and ensuring a smooth performance of your application. 
 */

/**
-- Instances When Cleanup is Needed
  1. Subscriptions to External Data Sources: When a component subscribes to an external data source, you should clean up to prevent memory leaks. This is common with WebSocket connections, observable subscriptions from libraries like RxJS, or custom event emitters.

useEffect(() => {
    const subscription = dataSource.subscribe(data => {
        // Handle the data
    });

    return () => {
        subscription.unsubscribe();
    };
}, []);

  2. Event Listeners: When adding event listeners, it's critical to remove them when the component unmounts to avoid memory leaks and unexpected behavior.

  useEffect(() => {
      const handleResize = () => {
          // Handle the resize event
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  3. Timers or Intervals: Clearing intervals or timeouts is necessary to prevent actions from being called after a component has unmounted.

  useEffect(() => {
      const timer = setTimeout(() => {
          // Perform some action
      }, 1000);

      return () => {
          clearTimeout(timer);
      };
  }, []);

  4. DOM Manipulations: If you manipulate the DOM (though rare and often discouraged in React), you should revert those changes in the cleanup.

  useEffect(() => {
      document.title = "New Page Title";

      return () => {
          document.title = "Original Page Title";
      };
  }, []);

  5. Heavy Computation: In cases where components initiate heavy computations or processes that can be paused or need to be halted when the component unmounts or re-renders.

  These instances show the importance of managing side effects properly in React components to ensure that the application is efficient, bug-free, and easy to maintain. Cleanup functions in useEffect are a crucial part of managing lifecycle events and side effects in function components.

  ----------------------------------------------------------------------------------
  -- OTHER INSTANCES --
  ----------------------------------------------------------------------------------
  
  There are several other scenarios where the cleanup function in React's useEffect hook is crucial. While we covered some common cases like subscriptions, event listeners, and timers, here are additional instances where cleanup might be necessary:
  
  1. Stopping or Pausing Media: If you have media elements (like video or audio) that are playing or have ongoing controls within your component, you might want to pause or reset these media elements when the component unmounts or the relevant dependencies change.
  
  useEffect(() => {
    const videoElement = document.querySelector('video');
    videoElement.play();
    
    return () => {
      videoElement.pause();
    };
  }, []);
  
  2. Canceling Pending Promises or API Calls: If your component starts an asynchronous operation (e.g., fetching data from an API), and you don't want these operations to continue if the component unmounts before they complete, you might need to cancel these operations to avoid setting state on an unmounted component.
  
  useEffect(() => {
      const controller = new AbortController();
      const fetchUserData = async () => {
        try {
          const response = await fetch('/api/user', { signal: controller.signal });
          // Handle response
        } catch (error) {
          // Handle error
        }
      };
      fetchUserData();
      
      return () => {
        controller.abort(); // Abort fetch on cleanup
      };
    }, []);
    
    3. Cleanup in Third-Party Libraries: When using third-party libraries that manage their own DOM elements or state, it's often necessary to call specific cleanup functions provided by the library to ensure resources are properly released.
    
    useEffect(() => {
      const chart = new Chart(canvasElement, config);
      
      return () => {
        chart.destroy(); // Cleanup method specific to the library
      };
    }, []);
    
    4. Dynamic CSS Classes or Styles: If you manipulate CSS directly by adding classes or styles to elements, especially when such styles affect layout or are resource-intensive (like animations), removing these modifications when they are no longer needed can prevent layout issues and improve performance.
    
    useEffect(() => {
      document.body.classList.add('modal-open');
      
      return () => {
        document.body.classList.remove('modal-open');
      };
    }, []);
    
    5. Web Workers: If your component uses Web Workers for background tasks, you should terminate them in the cleanup function to free up resources and ensure they do not continue running after the component is no longer in use.
    
    useEffect(() => {
      const worker = new Worker('worker.js');
      
      worker.postMessage({ type: 'start', payload: {} });
      
      return () => {
        worker.terminate();
      };
    }, []);
    
    6. Connection Pools or Database Connections in SSR: If your React application runs on a server (with SSR) and handles things like database connections or similar resources, cleaning up those resources when components unmount or re-render is critical to preventing memory leaks.
    
    Each of these scenarios involves managing external resources or side effects that can lead to bugs, memory leaks, or unexpected behavior if not properly cleaned up. The cleanup function in useEffect provides a consistent and React-friendly way to handle such cleanup tasks effectively.

    ----------------------------------------------------------------------------------
    -- How will i know when to use the useEffect clean up function? --
    ----------------------------------------------------------------------------------

    The useEffect clean up function is used whenever you have operations within your useEffect hook that need to be tidied up to prevent unwanted behavior or resource leaks when the component unmounts or before the effect re-runs due to changes in its dependencies. Specifically, you should consider using a cleanup function in the following scenarios:

  1. Adding and Removing Event Listeners: If you attach event listeners to the DOM or other objects like WebSocket connections, you need to remove them when the component unmounts to avoid memory leaks and potential bugs due to multiple listeners being attached unnecessarily.
  2. Subscription-based Services: When your component subscribes to external data sources (like APIs, custom events, or observables), you should unsubscribe or disconnect to prevent updates to the component after it has unmounted.
  3. Timers and Intervals: Cleanup is necessary for any setTimeout or setInterval to clear these timers if the component unmounts before the timer completes. This prevents the callback functions from being called even after the component is no longer in the DOM.
  4. External Library Integrations: If you use external libraries that require a cleanup procedure (such as data fetching libraries, graphics or charting libraries with their own DOM manipulations, or listening mechanisms), you should adhere to those libraries' cleanup recommendations to prevent memory leaks.
  5. Manual DOM Manipulations: When your component manually changes the DOM (though generally discouraged in React), these changes should be reverted when the component unmounts to keep the DOM clean.
  6. Web Workers or Background Threads: If you initiate web workers for background processing, terminating them during the cleanup phase prevents them from running indefinitely.
  7. Heavy Computations or Resources: If your component initializes resources that are computationally expensive or hold significant memory/CPU, these should be appropriately halted and cleaned up to ensure they don't continue to consume resources.
  8. Promise or Fetch Operations: When dealing with asynchronous operations like fetch API requests, cleaning up might involve cancelling these requests if they are no longer needed to prevent setting state on an unmounted component.

  Knowing when to use a cleanup function in useEffect is mostly about understanding the lifecycle of your component and managing resources efficiently. It's about ensuring that any side effects introduced by the component do not extend beyond the lifespan of the component itself, thus adhering to good React practices and ensuring a smooth performance of your application.
*/
