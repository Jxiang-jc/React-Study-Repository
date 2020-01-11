import React, { Component } from 'react'
import './index.scss'
import Swiper from 'swiper'
import { banner } from '../../../../mock/banner'

const SlideItem = (props) => {
	let { data } = props
	return (
		<div className="swiper-slide">
			<img width="100%" src={data.imgUrl} alt="" />
		</div>
	)
}

class HomeBanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			billboards: []
		}
	}
	componentDidMount() {
		// this.getBillboards()
		this.setState({
			billboards: banner[0].data
		})
	}
	componentDidUpdate() {
		if (!this.swiper) {
			this.swiper = new Swiper(this.el, {
				pagination: { el: '.swiper-pagination' }
			})
		}
	}
	// 获取轮播图信息。因为卖座接口升级了。导致目前是mock数据
	getBillboards() {
		// https://m.maizuo.com/gateway?type=2&cityId=440100&k=8052360
		this.$http.get('/mz/gateway', {
			params: {
				type: 2,
				cityId: 440100,
				k: 8052360
			}
		}).then(res => {
			console.log('res', res)
			this.setState({
				billboards: res.data.data.billboards
			})
		})
	}

	renderSliderItems() {
		let { billboards } = this.state

		return billboards.map(item => {
			return (
				<SlideItem key={item.bannerId} data={item} />
			)
		})
	}

	render() {
		return (
			<div ref={el => this.el = el} className="swiper-container">
				<div className="swiper-wrapper">
					{this.renderSliderItems()}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}

export default HomeBanner