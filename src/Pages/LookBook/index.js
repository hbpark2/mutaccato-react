import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import styled from 'styled-components'
import LookbookItem from './LookbookItem'
import {SS2018} from '../../ImageData/SS18Data'
import {FW2018} from '../../ImageData/FW18Data'
import {SS2019} from '../../ImageData/SS19Data'

const Container = styled.main``

const Tab = styled.ul`
  display: flex;
  width: 300px;
  padding: 65px 0;
  text-align: center;
  margin: 0 auto;
  li {
    &:first-child button {
      border: none;
    }
  }
  button {
  }
`
const TabBtn = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
  border-left: 1px solid #ababab;
  box-sizing: border-box;
  color: ${props => (props.tabState ? props.theme.keyDeepBlue : '#ababab')};
  &:hover {
    color: ${props => props.theme.keyDeepBlue};
  }
`

const LookBook = () => {
  const location = useLocation()
  const [tabState, setTabState] = useState('2018SS')

  const onTabStateChange = state => {
    setTabState(state)
  }

  useEffect(() => {
    setTabState(location?.state?.pageState)
  }, [location?.state?.pageState])
  return (
    <>
      <Container>
        <Tab>
          <li>
            <TabBtn tabState={tabState === '2018SS'} onClick={() => onTabStateChange('2018SS')}>
              2018.s/s
            </TabBtn>
          </li>
          <li>
            <TabBtn tabState={tabState === '2018FW'} onClick={() => onTabStateChange('2018FW')}>
              2018.f/w
            </TabBtn>
          </li>
          <li>
            <TabBtn tabState={tabState === '2019SS'} onClick={() => onTabStateChange('2019SS')}>
              2019.s/s
            </TabBtn>
          </li>
        </Tab>
        {tabState === '2018SS' && <LookbookItem lbData={SS2018} />}
        {tabState === '2018FW' && <LookbookItem lbData={FW2018} />}
        {tabState === '2019SS' && <LookbookItem lbData={SS2019} />}
      </Container>
    </>
  )
}

export default LookBook
