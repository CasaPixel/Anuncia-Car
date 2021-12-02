import React,{Component} from 'react'

export class UserRenter extends Component {

    constructor(props){
        super(props);
        this.state = {deps:[]}
    }

    refreshLIst(){
        fetch(process.env.REACT_APP_API + 'RenterUser')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        })
    }

    componentDidMount(){
        this.refreshLIst();
    }

    componentDidUpdate(){
        this.refreshLIst();
    }

    render(){
        const {deps} = this.state;
        return(
            <div>
                {deps.map(dep=>
                    <div key = {dep.RenterUserId}>
                        <h1>{dep.RenterUserName}</h1>
                        <h1>{dep.PhoneNumber}</h1>
                        <h1>{dep.EmailUser}</h1>
                        <h1>{dep.PasswordUser}</h1>
                    </div>
                    )}
            </div>
        )
    }
}