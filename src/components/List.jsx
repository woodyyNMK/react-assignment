import Card from "./Card";
import "../styles/Card.css";

export default function List({user}){
    const arr= [
        {
            "name": "John Doe",
            "job": "Engineer",
            "hobby": "Listening to music"
        },

        {
            "name": "John Smith",
            "job": "Programmer",
            "hobby": "Runnning"
        },

        {
            "name": "John Roe",
            "job": "Farmer",
            "hobby": "Swimming"
        }
    ]

    const ListofCards=arr.map((el)=> {
        return(
            <Card user={el} />
        );
    })
    return(
        <div>{ListofCards}</div>
    );
}