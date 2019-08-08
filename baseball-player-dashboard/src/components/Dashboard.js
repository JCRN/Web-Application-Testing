import React, { useState } from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">At Bat</Table.HeaderCell>
            <Table.HeaderCell colSpan="3">Count</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Balls</Table.HeaderCell>
            <Table.HeaderCell>Fouls</Table.HeaderCell>
            <Table.HeaderCell>Strikes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Babe Ruth</Table.Cell>
            <Table.Cell>0 Balls</Table.Cell>
            <Table.Cell>2 Fouls</Table.Cell>
            <Table.Cell>
              <Icon color="red" name="close" size="large" />
              <Icon color="red" name="close" size="large" />
              <Icon color="red" name="close" size="large" />
            </Table.Cell>
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>
              <Button>Ball</Button>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Button>Foul</Button>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Button>Strike</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
