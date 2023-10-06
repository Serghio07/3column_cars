import './styles/Button.css'
function button(props) 
{
    const more=props.more
    return(
        <section className='button'>
            <div className='orange-button'>
                 <p>Learn More</p>
            </div>
        </section>
    )
    
}
export default button