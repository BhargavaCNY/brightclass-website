import React from 'react'
import RedCircle from './RedCircle'
import GreenTick from './GreenTick'
import TableItemIcon from './TableItemIcon'
import { BASE_URL } from '@/components/common/constants'
import classes from './Table.module.css';

const Table = () => {
  return (
    <>
      <table style={{ width: ' 100%' }}>
        <tr>
          <th>Features</th>
          <th>Other Smart Class Solutions</th>
          <th>
            <img
              src={`${BASE_URL.STATIC_SERVER}/brightclassLogoWithName.svg`}
              alt="icon"
              width="110"
              height="36"
            />
          </th>
        </tr>
        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon1.png'} />
              <div> In-class teaching tools</div>
            </div>
          </td>
          <td><GreenTick /></td>
          <td><GreenTick /></td>
        </tr>
        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon2.png'} />
              <div> Lesson / Course creation</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon3.png'} />
              <div>   Record lectures</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon4.png'} />
              <div>  Communication with other stakeholders</div>
            </div>

          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon5.png'} />
              <div>  Homework / Assessments</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon6.png'} />
              <div>  Grade report generation</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon7.png'} />
              <div>    Virtual teaching</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon8.png'} />
              <div>   School analytics</div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon9.png'} />
              <div>   Yearly schedule</div>
            </div>

          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>

        <tr>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
              <TableItemIcon iconLink={'/tabelFeatureIcon10.png'} />
              <div>   Attendance </div>
            </div>
          </td>
          <td><RedCircle /></td>
          <td><GreenTick /></td>
        </tr>
      </table>
    </>
  )
}

export default Table