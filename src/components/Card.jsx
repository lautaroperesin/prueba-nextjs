export default function Card({children}){
    const cardStyle = {
        border: 'thin solid red',
        margin: '1rem',
        padding: '1rem'
    } 

    return(
        <div style={cardStyle}>
            {children}
        </div>
    );
}