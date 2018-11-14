import React from 'react'
import Comment from './Comment'


class CommpentList extends Comment {
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
			</div>
		)
	}

	toggleOpen = (ev) => this.setState({
		isOpen: !this.state.isOpen
	})

	getBody() {
		if (!this.state.isOpen) return null

		const {comments} = this.props
		if (!comments || !comments.length) return <p>No comments yet'</p>

		return (
			<ul>
				{comments.map(comments => <li key = {comments.id}><Comment comment = {comment} /></li>)}
			</ul>
		)
	}
}