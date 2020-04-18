import styles from '../style.css'
class TypeSearch extends React.Component {
    constructor(props){
    super(props)
      this.State = {
        types:[]
      };
    }


     readType = (event) => {
         event.preventDefault();
         let element = document.querySelector("#type");

         fetch("api/pokemon/typeList/" + element.value)
         .then((res) => {
             return res.json();
         })
         .then((processed) => {

             let reporting = document.querySelector("#reportingArea");
             processed = this.state.types;
                processed++;
                this.setState({
                types: [processed]
            });

             if(processed.error) {
                 reporting.innerHTML = processed.error;
             } else {
                 reporting.innerHTML = this.state.types.name;
             }

         });

         element.value = "";
     }


     render() {
         return(
             <div>
                 <h2>Pokemon Type</h2>
                 <form onSubmit={this.readType}>
                     <input id="type" type="text" />
                     <button>Submit</button>
                 </form>
             </div>
             );
         }
     }

  export default TypeSearch;
