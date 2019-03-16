import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function ConsoleLogPlugin(report) {
  console.log("Perry Report:", report);
}

const perry = new window.Perry({
  plugins: [ConsoleLogPlugin]
});

perry
  .render()
  .then(() => console.log("Perry Widget is Rendered"))
  .catch(console.error);
