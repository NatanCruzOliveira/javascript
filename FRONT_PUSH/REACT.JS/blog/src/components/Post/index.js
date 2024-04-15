

function Post(props) {
    return(
        <div className='post'>
            <div className='img-post'></div>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p>
                {props.children}
            </p>
            <div className='flex viewpost'>
                <div className='img-profile'></div>
                <div className='description-profile'>
                    <h6>João</h6>
                    <p>
                            Maio, 2020 - 8 minutos de leitura
                    </p>
                </div>
            </div>
        
        </div>
    );
}

export default Post;