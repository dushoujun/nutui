import React, { FunctionComponent, useState, useEffect } from 'react'
import './actionsheet.scss'

export interface ActionSheetProps {
  cancelTxt: String
  optionTag: String
  optionSubTag: String
  chooseTagValue: String
  title: String
  color: String
  description: String
  menuItems: any[]
  cancel: () => void
  choose: (item: any, index: string) => void
  visible: boolean
}
const defaultProps = {
  cancelTxt: '',
  optionTag: 'name',
  optionSubTag: 'subname',
  chooseTagValue: '',
  title: '',
  color: '#ee0a24',
  description: '',
  menuItems: [],
  cancel: () => {},
  choose: () => {},
  visible: false,
} as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    cancelTxt,
    optionTag,
    optionSubTag,
    chooseTagValue,
    title,
    color,
    description,
    menuItems,
    cancel,
    choose,
    visible,
  } = { ...defaultProps, ...props }

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(visible)
  }, [visible])

  const isHighlight = (item) => {
    return props.chooseTagValue && props.chooseTagValue === item[props.optionTag]
      ? props.color
      : '#1a1a1a'
  }

  const cancelActionSheet = () => {
    cancel && cancel()
  }

  const chooseItem = (item, index) => {
    if (!item.disable) {
      choose && choose(item, index)
    }
  }

  return (
    <div className="popup" style={visible ? { display: 'block' } : { display: 'none' }}>
      <div className="nut-actionsheet-panel">
        {title && <div className="nut-actionsheet-title">{title}</div>}
        {description && <div className="nut-actionsheet-item desc">{description}</div>}
        {menuItems.length ? (
          <div className="nut-actionsheet-menu">
            {menuItems.map((item, index) => {
              return (
                <div
                  className={`nut-actionsheet-item ${
                    item.disable ? 'nut-actionsheet-item-disabled' : ''
                  }`}
                  style={{ color: isHighlight(item) }}
                  key={index}
                  onClick={() => chooseItem(item, index)}
                >
                  {item[optionTag]}
                  <div className="subdesc">{item[optionSubTag]}</div>
                </div>
              )
            })}
          </div>
        ) : null}
        <div
          className="nut-actionsheet-cancel"
          v-if="cancelTxt"
          onClick={() => cancelActionSheet()}
        >
          {cancelTxt}
        </div>
      </div>
    </div>
  )
}

ActionSheet.defaultProps = defaultProps
ActionSheet.displayName = 'NutActionSheet'
