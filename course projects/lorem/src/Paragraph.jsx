function Paragraph({ paragraph, getNumOfPara, generate }) {
  return (
    <form action="" onSubmit={generate}>
      <label htmlFor="paragraphInput">Paragraphs:</label>
      <input
        type="number"
        min="1"
        max="9"
        name="paragraphInput"
        id="paragraphInput"
        value={paragraph}
        onChange={getNumOfPara}
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default Paragraph;
