import React, {useState} from 'react';


function FormFunc(){
    
    const [user, setUser] = useState({
        arr: [],
        names:'',
        age:'',
        course:'',
        gendr:'',
        tCs: false,
    })

    // let handelFuncOnChange=({target:{name, value, checked}})=>{
    //         setUser({...user,[]})
    //     }
    let handelFuncOnChange=(e)=>{
        if (e.target.name==='tCs'){
            setUser({...user,[e.target.name]: e.target.checked })
        }
        else{
            setUser({...user,[e.target.name]: e.target.value })
        }  
    }

    let handelFuncSubmit=(eve)=>{
        eve.preventDefault();
        const {arr, names,age,course,gendr,tCs}=user
        const newarr=[...arr]
        newarr.push({id:Math.floor(Math.random()*10000),names,age,course,gendr,tCs})
        setUser({arr:newarr})
    } 

    return(
        <>
            <form action="" onSubmit={handelFuncSubmit}>
                <div>
                    <p>Using Functional Component</p>
                </div>
                <div>
                    <label htmlFor="name">Name:&ensp;</label>
                    <input type="text" value={user.name} name="names" id="name" onChange={handelFuncOnChange} />
                </div><br />
                <div>
                    <label htmlFor="age">Age:&ensp;</label>
                    <input type="number" value={user.age} name="age" id="age" onChange={handelFuncOnChange}  />
                </div><br />
                <div>
                    <label htmlFor="course">Course:&ensp;</label>
                    <select name="course" value={user.course} id="course" onChange={handelFuncOnChange} >
                        <option value="">--select--</option>
                        <option value="full-stack">Full Stack Dev</option>
                        <option value="back-end">Back End Dev</option>
                        <option value="front-end">Front End Dev</option>
                    </select>
                </div><br />
                <div> Gender: 
                    <input type="radio" name="gendr" id="males" value='male' checked={user.gendr} onChange={handelFuncOnChange} />
                    <label htmlFor="males">Male</label>
                    <input type="radio" name="gendr" id="females" value='female' checked={user.gendr} onChange={handelFuncOnChange} />
                    <label htmlFor="females">Female</label>
                    <input type="radio" name="gendr" id="others" value='other' checked={user.gendr} onChange={handelFuncOnChange} />
                    <label htmlFor="others">Other</label>
                    
                    
                </div><br />
                <div>
                    <input type="checkbox" className='form-check-input mt-0' name="tCs"  checked={user.tCs}  id="tCs" onChange={handelFuncOnChange} />
                    <label htmlFor="tCs">&ensp;I accept the terms and conditions</label>
                </div><br />
                <div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.arr.map((eke)=>{
                            return(
                                <tr key={eke.id}>
                                    <td>{eke.id}</td>
                                    <td>{eke.names}</td>
                                    <td>{eke.age}</td>
                                    <td>{eke.course}</td>
                                    <td>{eke.gendr}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>  
            </table>
        </>
    )
}

export default FormFunc;


                    // <label htmlFor="">gender:&ensp;</label>
                    // <input type="radio" value="male" name="gendr" id="mole" checked={user.gendr} onChange={handelFuncOnChange} />
                    // <label  htmlFor="mole">Males&ensp;</label>
                    // <input type="radio" value="female" checked={user.gendr} name="gendr" id="fole" onChange={handelFuncOnChange}  />
                    // <label  htmlFor="fole">Females&ensp;</label>
                    // <input type="radio" value="other" name="gendr" checked={user.gendr} id="ole" onChange={handelFuncOnChange}  />
                    // <label  htmlFor="ole">Others&ensp;</label>