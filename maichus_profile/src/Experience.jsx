const Experience = ({Experience})=>{
    return(
        <div>
                <h2>Experience</h2>
                {Experience.map((item) => (
                <Experience key={item.id} major={item.major} />
            ))}
            </div>
    )
}

export default Experience;