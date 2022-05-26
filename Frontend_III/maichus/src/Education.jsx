const Education = ({ Education }) => {
    return (
        <div>
        <h2>Education</h2>
        {Education.map((item) => (
        <Education key={item.id} institute={item.institute} />
    ))}
    </div>
    )
    
  };
  export default Education;