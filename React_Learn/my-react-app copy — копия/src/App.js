const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <div>
          <p key={index}>{line}</p>
          {poem.lines.length - 1 === index ? null : <hr></hr>}
        </div>
      ))}
    </article>
  );
}
