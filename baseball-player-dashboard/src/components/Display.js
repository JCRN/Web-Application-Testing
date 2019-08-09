import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const Display = props => {
  console.log(props)

  return (
    <div className="dashboard-wrapper">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">At Bat</Table.HeaderCell>
            <Table.HeaderCell colSpan="2">Count</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Balls</Table.HeaderCell>
            <Table.HeaderCell>Strikes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Ken Griffey Jr.</Table.Cell>
            <Table.Cell data-testid="count">{props.balls}</Table.Cell>
            <Table.Cell data-testid="count">{props.strikes}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="btns-wrapper">
        <Button onClick={props.ballCount}>Ball</Button>
        <Button onClick={props.foulCount}>Foul</Button>
        <Button onClick={props.strikeCount}>Strike</Button>
        <Button onClick={props.hit}>Hit!!</Button>
      </div>
    </div>
  )
}

export default Display
