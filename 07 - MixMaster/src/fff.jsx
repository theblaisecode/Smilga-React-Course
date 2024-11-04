import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter/Newsletter.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient),
        },
        {
          path: "cocktail/:id",
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader(queryClient),
          element: <Cocktail />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
          action: newsletterAction,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: "/Tipsy-Mix" }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

export { default as About } from "./About/About.jsx";
export { default as Cocktail } from "./Cocktail/Cocktail.jsx";
export { default as Error } from "./Error/Error.jsx";
export { default as HomeLayout } from "./HomeLayout/HomeLayout.jsx";
export { default as Landing } from "./Landing/Landing.jsx";
export { default as Newsletter } from "./Newsletter/Newsletter.jsx";
export { default as SinglePageError } from "./SinglePageError/SinglePageError.jsx";

import { Link, useRouteError } from "react-router-dom";
import SingleErrorWrapper from "./SinglePageError";

function SinglePageError() {
  const error = useRouteError();

  return (
    <SingleErrorWrapper>
      <div>
        {/* <h3>{error.message}</h3> */}

        <h2>Ohh! Something went wrong</h2>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </SingleErrorWrapper>
  );

  return (
    <SingleErrorWrapper>
      <h3>Something went wrong</h3>
    </SingleErrorWrapper>
  );
}

export default SinglePageError;

import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import NewsletterWrapper from "./Newsletter.js";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Newsletter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <NewsletterWrapper>
      <Form method="POST" className="form">
        <h4>Our Newsletter</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            defaultValue="test@test.com"
            placeholder="Email Address"
            required
          />
        </div>

        <button type="submit" className="btn btn-lock" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>

        <h5>Note: Only test@test.com is allowed</h5>
      </Form>
    </NewsletterWrapper>
  );
}

export default Newsletter;

import { useLoaderData } from "react-router-dom";
import axios from "axios";
import HomeWrapper from "./Landing";
import CocktailList from "../../components/CocktailList/CocktailList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => ({
  queryKey: ["search", searchTerm || "all"],
  queryFn: async () => {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return response.data.drinks;
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

function Landing() {
  const { searchTerm } = useLoaderData();
  const {
    data: drinks,
    isLoading,
    isError,
  } = useQuery(searchCocktailsQuery(searchTerm));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching cocktails</div>;
  }

  return (
    <HomeWrapper>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </HomeWrapper>
  );
}

export default Landing;

import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LayoutWrapper from "./HomeLayout.js";

function HomeLayout() {
  const fastNavigation = useNavigation();

  const isPageLoading = fastNavigation.state === "loading";

  const value = "some value";

  return (
    <>
      <Navbar />
      <LayoutWrapper>
        {isPageLoading ? (
          <div className="loadingSpinner">
            <div className="loading"></div>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </LayoutWrapper>
    </>
  );
}

export default HomeLayout;

import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import ErrorWrapper from "./Error.js";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <ErrorWrapper>
        <div>
          <img src={img} alt="page not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back to Home</Link>
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      <h3>Something went wrong</h3>
    </ErrorWrapper>
  );
}

export default Error;

import { Link, useLoaderData, Navigate } from "react-router-dom";
import axios from "axios";
import CocktailWrapper from "./Cocktail";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cockatail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

function Cocktail() {
  const { id } = useLoaderData();

  // if (!data) {return <h2>Something went wrong...</h2>}
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) {
    return <Navigate to="/" />;
  }

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <CocktailWrapper>
      <header>
        <Link to="/" className="btn">
          Back to Home
        </Link>

        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />

        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">Ingredient:</span>{" "}
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </CocktailWrapper>
  );
}

export default Cocktail;

import CocktailCard from "../CocktailCard/CocktailCard.jsx";
import CocktailListWrapper from "./CocktailList";

function CocktailList({ drinks }) {
  console.log(drinks)
  if (!drinks) {
    return (
      <CocktailListWrapper>
        <h4>No matching cocktails found...</h4>
      </CocktailListWrapper>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlchoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlchoholic,
      glass: strGlass,
    };
  });

  return (
    <CocktailListWrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </CocktailListWrapper>
  );
}

export default CocktailList;

no data found
CocktailList.jsx:14 Uncaught TypeError: drinks.map is not a function
    at CocktailList (CocktailList.jsx:14:34)
    at renderWithHooks (chunk-ZXN67JHZ.js?v=d84ec1e6:11568:26)
    at mountIndeterminateComponent (chunk-ZXN67JHZ.js?v=d84ec1e6:14946:21)
    at beginWork (chunk-ZXN67JHZ.js?v=d84ec1e6:15934:22)
    at HTMLUnknownElement.callCallback2 (chunk-ZXN67JHZ.js?v=d84ec1e6:3674:22)
    at Object.invokeGuardedCallbackDev (chunk-ZXN67JHZ.js?v=d84ec1e6:3699:24)
    at invokeGuardedCallback (chunk-ZXN67JHZ.js?v=d84ec1e6:3733:39)
    at beginWork$1 (chunk-ZXN67JHZ.js?v=d84ec1e6:19793:15)
    at performUnitOfWork (chunk-ZXN67JHZ.js?v=d84ec1e6:19226:20)
    at workLoopSync (chunk-ZXN67JHZ.js?v=d84ec1e6:19165:13)
CocktailList @ CocktailList.jsx:14
renderWithHooks @ chunk-ZXN67JHZ.js?v=d84ec1e6:11568
mountIndeterminateComponent @ chunk-ZXN67JHZ.js?v=d84ec1e6:14946
beginWork @ chunk-ZXN67JHZ.js?v=d84ec1e6:15934
callCallback2 @ chunk-ZXN67JHZ.js?v=d84ec1e6:3674
invokeGuardedCallbackDev @ chunk-ZXN67JHZ.js?v=d84ec1e6:3699
invokeGuardedCallback @ chunk-ZXN67JHZ.js?v=d84ec1e6:3733
beginWork$1 @ chunk-ZXN67JHZ.js?v=d84ec1e6:19793
performUnitOfWork @ chunk-ZXN67JHZ.js?v=d84ec1e6:19226
workLoopSync @ chunk-ZXN67JHZ.js?v=d84ec1e6:19165
renderRootSync @ chunk-ZXN67JHZ.js?v=d84ec1e6:19144
recoverFromConcurrentError @ chunk-ZXN67JHZ.js?v=d84ec1e6:18764
performConcurrentWorkOnRoot @ chunk-ZXN67JHZ.js?v=d84ec1e6:18712
workLoop @ chunk-ZXN67JHZ.js?v=d84ec1e6:197
flushWork @ chunk-ZXN67JHZ.js?v=d84ec1e6:176
performWorkUntilDeadline @ chunk-ZXN67JHZ.js?v=d84ec1e6:384
Show 15 more frames
Show lessUnderstand this errorAI
hook.js:608 The above error occurred in the <CocktailList> component:

    at CocktailList (http://localhost:5175/Tipsy-Mix/src/components/CocktailList/CocktailList.jsx?t=1730703350497:19:3)
    at section
    at P2 (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/styled-components.js?v=41b84bc4:1615:6)
    at Landing (http://localhost:5175/Tipsy-Mix/src/pages/Landing/Landing.jsx?t=1730703139487:45:7)
    at RenderedRoute (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3135:5)
    at RenderErrorBoundary (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3095:5)
    at Outlet (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3484:26)
    at section
    at P2 (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/styled-components.js?v=41b84bc4:1615:6)
    at HomeLayout (http://localhost:5175/Tipsy-Mix/src/pages/HomeLayout/HomeLayout.jsx:22:26)
    at RenderedRoute (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3135:5)
    at RenderErrorBoundary (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3095:5)
    at DataRoutes (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3419:5)
    at Router (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3491:15)
    at RouterProvider (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/react-router-dom.js?v=c8a8e729:3375:5)
    at QueryClientProvider (http://localhost:5175/Tipsy-Mix/node_modules/.vite/deps/@tanstack_react-query.js?v=d650207b:2847:3)
    at App

React will try to recreate this component tree from scratch using the error boundary you provided, RenderErrorBoundary.
overrideMethod @ hook.js:608
logCapturedError @ chunk-ZXN67JHZ.js?v=d84ec1e6:14052
callback @ chunk-ZXN67JHZ.js?v=d84ec1e6:14098
callCallback @ chunk-ZXN67JHZ.js?v=d84ec1e6:11268
commitUpdateQueue @ chunk-ZXN67JHZ.js?v=d84ec1e6:11285
commitLayoutEffectOnFiber @ chunk-ZXN67JHZ.js?v=d84ec1e6:17097
commitLayoutMountEffects_complete @ chunk-ZXN67JHZ.js?v=d84ec1e6:18008
commitLayoutEffects_begin @ chunk-ZXN67JHZ.js?v=d84ec1e6:17997
commitLayoutEffects @ chunk-ZXN67JHZ.js?v=d84ec1e6:17948
commitRootImpl @ chunk-ZXN67JHZ.js?v=d84ec1e6:19381
commitRoot @ chunk-ZXN67JHZ.js?v=d84ec1e6:19305
finishConcurrentRender @ chunk-ZXN67JHZ.js?v=d84ec1e6:18788
performConcurrentWorkOnRoot @ chunk-ZXN67JHZ.js?v=d84ec1e6:18746
workLoop @ chunk-ZXN67JHZ.js?v=d84ec1e6:197
flushWork @ chunk-ZXN67JHZ.js?v=d84ec1e6:176
performWorkUntilDeadline @ chunk-ZXN67JHZ.js?v=d84ec1e6:384
Show 16 more frames
Show lessUnderstand this errorAI
hook.js:608 React Router caught the following error during render TypeError: drinks.map is not a function
    at CocktailList (CocktailList.jsx:14:34)
    at renderWithHooks (chunk-ZXN67JHZ.js?v=d84ec1e6:11568:26)
    at mountIndeterminateComponent (chunk-ZXN67JHZ.js?v=d84ec1e6:14946:21)
    at beginWork (chunk-ZXN67JHZ.js?v=d84ec1e6:15934:22)
    at beginWork$1 (chunk-ZXN67JHZ.js?v=d84ec1e6:19781:22)
    at performUnitOfWork (chunk-ZXN67JHZ.js?v=d84ec1e6:19226:20)
    at workLoopSync (chunk-ZXN67JHZ.js?v=d84ec1e6:19165:13)
    at renderRootSync (chunk-ZXN67JHZ.js?v=d84ec1e6:19144:15)
    at recoverFromConcurrentError (chunk-ZXN67JHZ.js?v=d84ec1e6:18764:28)
    at performConcurrentWorkOnRoot (chunk-ZXN67JHZ.js?v=d84ec1e6:18712:30) {componentStack: '\n    at CocktailList (http://localhost:5175/Tipsy-…tack_react-query.js?v=d650207b:2847:3)\n    at App'} Error Component Stack
    at RenderErrorBoundary (react-router-dom.js?v=c8a8e729:3095:5)
    at Outlet (react-router-dom.js?v=c8a8e729:3484:26)
    at section (<anonymous>)
    at P2 (styled-components.js?v=41b84bc4:1615:6)
    at HomeLayout (HomeLayout.jsx:6:26)
    at RenderedRoute (react-router-dom.js?v=c8a8e729:3135:5)
    at RenderErrorBoundary (react-router-dom.js?v=c8a8e729:3095:5)
    at DataRoutes (react-router-dom.js?v=c8a8e729:3419:5)
    at Router (react-router-dom.js?v=c8a8e729:3491:15)
    at RouterProvider (react-router-dom.js?v=c8a8e729:3375:5)
    at QueryClientProvider (@tanstack_react-query.js?v=d650207b:2847:3)
    at App (<anonymous>)
overrideMethod @ hook.js:608
componentDidCatch @ react-router-dom.js?v=c8a8e729:3122
callback @ chunk-ZXN67JHZ.js?v=d84ec1e6:14104
callCallback @ chunk-ZXN67JHZ.js?v=d84ec1e6:11268
commitUpdateQueue @ chunk-ZXN67JHZ.js?v=d84ec1e6:11285
commitLayoutEffectOnFiber @ chunk-ZXN67JHZ.js?v=d84ec1e6:17097
commitLayoutMountEffects_complete @ chunk-ZXN67JHZ.js?v=d84ec1e6:18008
commitLayoutEffects_begin @ chunk-ZXN67JHZ.js?v=d84ec1e6:17997
commitLayoutEffects @ chunk-ZXN67JHZ.js?v=d84ec1e6:17948
commitRootImpl @ chunk-ZXN67JHZ.js?v=d84ec1e6:19381
commitRoot @ chunk-ZXN67JHZ.js?v=d84ec1e6:19305
finishConcurrentRender @ chunk-ZXN67JHZ.js?v=d84ec1e6:18788
performConcurrentWorkOnRoot @ chunk-ZXN67JHZ.js?v=d84ec1e6:18746
workLoop @ chunk-ZXN67JHZ.js?v=d84ec1e6:197
flushWork @ chunk-ZXN67JHZ.js?v=d84ec1e6:176
performWorkUntilDeadline @ chunk-ZXN67JHZ.js?v=d84ec1e6:384
Show 16 more frames
Show lessUnderstand this errorAI