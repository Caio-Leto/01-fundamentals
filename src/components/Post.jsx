import styles from './Post.module.css'

export function Post() {
    return(
        <article className={StyleSheet.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Caio-Leto.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Caio Leto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Fevereiro ás 08:13h' datetime="2025-02-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal</p>
                <p>Criando um projeto novo, aprofundando meus conhecimentos em reactjs!</p>
                <p><a href="">Caio.design/doctorcare</a></p>
                <p><a href=""></a>#novoprojeto</p>
            </div>
        </article>
    )
}