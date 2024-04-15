import Post from '../Post';


function Article() {

    //Fazer uma requiseição para uma API
    

    return (
        <section className='container'>
            <h2>Artigos</h2>
            <div className='container-posts'>
                <Post subtitle='Tecnologia' title='O guia definitivo sobre o blog'>
                    1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus nostrum ducimus tempora recusandae neque saepe laborum eaque nemo, harum, nulla tenetur magnam deserunt architecto ab impedit maxime in distinctio.
                </Post>
                <Post subtitle='Fotografia' title='Quais as melhores câmeras em 2024'>
                    2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus nostrum ducimus tempora recusandae neque saepe laborum eaque nemo, harum, nulla tenetur magnam deserunt architecto ab impedit maxime in distinctio.
                </Post>
                <Post subtitle='Cinema' title='Os 10 filmes com maior bilheteria'>
                    3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus nostrum ducimus tempora recusandae neque saepe laborum eaque nemo, harum, nulla tenetur magnam deserunt architecto ab impedit maxime in distinctio.
                </Post>
            </div>
            
        </section> 
    );
}

export default Article;