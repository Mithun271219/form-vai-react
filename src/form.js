import React from 'react'

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            candidates:[],
            candidateName:'',
            candidateAge:'',
            candidateRole:'',
            candidateGender:'',
            tC:false,
            toched:{
                candidateName:false,
                candidateAge:false,
                candidateRole:false,
                candidateGender:false,
                tC:false
            },
            errors:{
                candidateName:'',
                candidateAge:'',
                candidateRole:'',
                candidateGender:'',
                tC:''
            }
        }
    }

    handelChange=( {target : {name,value,checked} } )=>{
        //onChange={({target:{checked||value}})=>{this.setState({tC:checked||value})}}
        if (name==='tC') value=checked;

        const errors={...this.state.errors}

        switch(name){
            case 'candidateName':{
                if ( value==''){
                    errors.candidateName='* Name is mandatory'
                }
                else if( value.length<3){
                    errors.candidateName='* Name must be greater than 3 character'
                }
                else if( value.length>20){
                    errors.candidateName='* Name should not more than 20 character'
                }
                else{
                    errors.candidateName=''
                }
                break;
            }
            case 'candidateAge':{
                if (value==''){
                    errors.candidateAge='* Age is mandatory'
                }
                else if (Number(value<18)){
                    errors.candidateAge='* Candidate age should be 18'
                }
                else{
                    errors.candidateAge=''
                }
                break;
            }
            case 'candidateRole':{
                if (value==''){
                    errors.candidateRole='* candidate should select any one of the role'
                }
                else{
                    errors.candidateRole=''
                }
                break;
            }
            case 'candidateGender':{
                if (value==''){
                    errors.candidateGender='* please select the Gender'
                }
                else {
                    errors.candidateGender=''
                }
                break;
            }
            case 'tC':{
                if (value==''){
                    errors.tC='* please accept the terms and conditions'
                }
                else {
                    errors.tC=''
                }
                break;
            }
        }
        this.setState({[name]: value, errors}) 
    }

    handelBlur=({target : {name} })=>this.setState({ toched: {...this.state.toched, [name]: true}})

    handelSubmit=(eve)=>{
        eve.preventDefault();
        const {candidates, candidateName, candidateAge,candidateGender,candidateRole,tC}=this.state;
        const isError=Object.values(this.state.errors).some((err)=>err!="");
        const isTouched=Object.values(this.state.toched).some((tch)=>!tch)
        if ( !isError && !isTouched){
            const newCandidates= [...candidates];
            newCandidates.push({id:Math.floor(Math.random()*10000), candidateName,candidateAge,candidateGender,candidateRole,tC});
            this.setState({candidates: newCandidates, candidateName:'',candidateAge:'',candidateGender:'',candidateRole:'',tC:false})
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.handelSubmit}>
                <div>
                    <p>Using class Component</p>
                    <div>
                        <label htmlFor=""> Candiate Name:&ensp; </label>
                        <input type="text" name="candidateName" id="" value={this.state.candidateName} 
                        onBlur={this.handelBlur} onChange={this.handelChange}/>
                        <h6>{this.state.errors.candidateName}</h6>
                    </div>  <br />
                    <div>
                        <label htmlFor=""> Candiate Age:&ensp; </label>
                        <input type="number" name="candidateAge" id="" value={this.state.candidateAge} 
                        onBlur={this.handelBlur} onChange={this.handelChange}/>  
                        <h6>{this.state.errors.candidateAge}</h6>
                    </div> <br />
                    <div>
                        <label htmlFor="">Role Applied:&ensp; </label>
                        <select name="candidateRole" id="" value={this.state.candidateRole} 
                         onBlur={this.handelBlur} onChange={this.handelChange} >
                            <option value="">--select--</option>
                            <option value="full-stack">Full Stack Dev</option>
                            <option value="front-end">Front End Dev</option>
                            <option value="back-end">Back End Dev</option>
                        </select>
                        <h6>{this.state.errors.candidateRole}</h6>
                    </div><br />
                    <div>
                        <label htmlFor="">Gender:&ensp; </label>
                        <input type="radio"  name="candidateGender" id="male" value="male" checked={this.state.candidateGender==='male'} 
                        onBlur={this.handelBlur} onChange={this.handelChange}/>
                        <label htmlFor="male">Male&ensp;</label>
                        <input type="radio"  name="candidateGender" id="female" value="female" checked={this.state.candidateGender==='female'}
                        onBlur={this.handelBlur} onChange={this.handelChange}/>
                        <label htmlFor="female">Female&ensp;</label>
                        <input type="radio"  name="candidateGender" id="other" value="other" checked={this.state.candidateGender==='other' }
                        onBlur={this.handelBlur} onChange={this.handelChange}/>
                        <label htmlFor="other">Other&ensp;</label>
                        <h6>{this.state.errors.candidateGender}</h6>
                    </div><br />
                    <div>
                        <input type="checkbox" className='form-check-input mt-0' name="tC" id="tc" checked={this.state.tC}
                        onBlur={this.handelBlur} onChange={this.handelChange}/>
                        <label htmlFor="tc">&ensp;I accept the terms and conditions</label>
                        <h6>{this.state.errors.tC}</h6>
                    </div><br />
                    <div>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th># Id</th>
                        <th>Candidate Name</th>
                        <th> Age</th>
                        <th> Gender</th>
                        <th>Applied Role</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.candidates.map((can)=>{
                        return(
                            <tr key={can.id}>
                                <td>{can.id}</td>
                                <td>{can.candidateName}</td>
                                <td>{can.candidateAge}</td>
                                <td>{can.candidateGender}</td>
                                <td>{can.candidateRole}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}

export default Form;
