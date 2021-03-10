marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};
//placeholder when loaded
const placeHolder = `
# This is H1 Element
## This is H2 Element
### This is H3 Element
Style the text **bold** _italic_ or ~~strike through~~

You can [link](https://github.com/opalkmm) to your portfolio
> "No matter how many people you may lose, you have no choice but to go on living. No matter how devastating the blows might be." - Tanjirou, Demon Slayer



\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`



- Unordered List
  - first item
     - second item
        - third item
        
Checklist
[x] Write the press release
[ ] Update the website
[ ] Contact the media
 
`;

const Input = (props) => {
  return (
    <textarea
      id="editor"
      value={props.text}
      onChange={props.onChange}
      type="text"
    />
  );
};

const Output = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.text, { renderer: renderer })}}/>
  );
};

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeHolder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    // const mytext = this.state.text;
    // console.log(mytext)

    return (
      <div className="container">
        <h1 id="top">Markdown Previewer</h1>

        <div className="form-group col-md-6" id="input">
          <p class="badge badge-pill">Editor</p>
          <Input onChange={this.handleChange} text={this.state.text} />
        </div>
          <p class="badge badge-pill" id="badge">Preview</p>
        <div className="form-group col-md-6" id="output">
         
          <Output text={this.state.text} />
          {/*<div className="post" id="preview" dangerouslySetInnerHTML={{ __html:marked("na") }}>
          </div>*/}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Application />, document.getElementById("app"));
