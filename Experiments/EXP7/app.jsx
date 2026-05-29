import Student from './Student'
function App() {
    return (
        <>
            <center><h1>Student Information</h1></center>
            <Student name={"Rahul Sharma"} course={"Course:Computer Science"} marks={"Marks:85"} />
            <Student name={"Anita Verma"} course={"Course:Information Technology"} marks={"Marks:92"} />
            <Student name={"Rohan Gupta"} course={"Course:Electronics"} marks={"Marks:78"} />
        </>
    )
}
export default App