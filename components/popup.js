import React from 'react'
import ClassInfo from '../classinfo'
import style from '../styles/popup.scss'

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.pressESC = this.pressESC.bind(this)
  }

  pressESC (event) {
    if (event.keyCode === 27) {
      this.props.onMaskClick()
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.pressESC, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.pressESC, false)
  }

  render () {
    if (!this.props.classId) return null
    const data = ClassInfo[this.props.classId.toString()]
    if (!data) return null

    const video = data.video ? (
      <iframe
        frameBorder='0'
        src={`//v.qq.com/txp/iframe/player.html?vid=${
          data.video
        }&autoplay=true&mini=true&disableplugin=IframeBottomOpenClientBar,IframeEndRecommend,IframePauseRecommend,IframeRelateRecommend`}
        allowFullScreen
      />
    ) : null

    return (
      <div className={style.popup}>
        <div className={style.mask} onClick={this.props.onMaskClick} />
        <div className={style.container}>
          {video}
          <div className={style.content}>
            <h2>{data.className}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.classIntroduce }} />
            {data.trainingEffect && (
              <span className={style.title}>训练效果</span>
            )}
            <p dangerouslySetInnerHTML={{ __html: data.trainingEffect }} />
            {data.suitablePeople && (
              <span className={style.title}>适合人群</span>
            )}
            <p dangerouslySetInnerHTML={{ __html: data.suitablePeople }} />
          </div>
        </div>
      </div>
    )
  }
}

export default Popup
