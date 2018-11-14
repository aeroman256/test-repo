import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
	state ={
		isOpen: false
	}

	render() {
		const text = this.state.isOpen ? 'hide comments' : 'show comments'
		return (
			<div>
				<button onClick = {this.toggleOpen}>
					{text}
				</button>
				{this.getBody()}
			</div>
		)
	}

	toggleOpen = (ev) => this.setState({
		isOpen: !this.state.isOpen
	})

	getBody() {
		if (!this.state.isOpen) return null

		const {comments} = this.props
		console.log('---', {comments})
		if (!comments || !comments.length) {
			return <p>No comments yet'</p>
		}

		return (
			<ul>
				{comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
			</ul>
		)
	}
}


export default CommentList

