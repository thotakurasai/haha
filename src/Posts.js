import React, { Component } from 'react'

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        };
    }
    render() {
        let Info = this.props.posts_data;
        console.log('postInfo');
        console.log(Info);
        return (
            <div>
                {
                Info.map((post) => {
                    return(
                        <div key={post.title}>
                            <p>{post.id}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}

export default Posts