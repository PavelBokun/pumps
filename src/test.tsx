
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>           
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }

import ReactDOM from 'react-dom'

export const VideoHeader = (props: {videoName: string}) => {
    return <div>
        😀 {props.videoName}
    </div>
}
export const VideoContent = (props: {videoContent: string}) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription = (props: {videoDescription: string}) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const YoutubeVideo = (props: { video: { title: string; link: string; description: string } }) => {
    return <div>
        <VideoHeader videoName={props.video.title}  />
        <VideoContent videoContent={props.video.link}  />
        <VideoDescription videoDescription={props.video.description}  />
    </div>
}

export const App = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course'
    }

    return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);
