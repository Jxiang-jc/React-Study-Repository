import React, {
	Component
} from 'react'
import './index.scss'
import HomeBanner from './HomeBanner'
import AppNav from '../../commons/AppNav'

class Home extends Component {
	render() {
		return (
			<div className="app-home">
				<HomeBanner />
				<AppNav/>
			</div>
		)
	}
}

export default Home