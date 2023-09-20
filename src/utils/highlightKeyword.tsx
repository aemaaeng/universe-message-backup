function highlightKeyword(text: string, keyword: string) {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <>
      {parts.map((part, idx) =>
        part === keyword ? <mark key={idx}>{part}</mark> : part
      )}
    </>
  );
}

export default highlightKeyword;
