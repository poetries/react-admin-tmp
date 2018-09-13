import React from 'react'
import styled from 'styled-components'

export const TableWrapper = styled.div`
    .ReactTable {
        margin-bottom: 93px;
        .rt-thead .rt-tr .rt-th{
          line-height: 26px;
        }
        .rt-tbody .rt-tr .rt-td{
          line-height: 22px;
        }
        .rt-thead {
          .rt-td.-sort-asc,
          .rt-th.-sort-asc,
          .rt-td.-sort-desc,
          .rt-th.-sort-desc {
            box-shadow: none;
            position: relative;
          }
          .rt-td.-sort-asc:before,
          .rt-th.-sort-asc:before {
            content: "\u25b2";
            position: absolute;
            right: 2px;
          }
          .rt-td.-sort-desc:before,
          .rt-th.-sort-desc:before {
            content: "\u25bc";
            position: absolute;
            right: 2px;
          }
        } 
    }

   .ReactTable.-striped {
      .rt-tr.-odd {
        background: #fff;
      }
      .rt-tr.-even {
         background: #fafafa;
      }
   }
   
   .ReactTable .-pagination {
      display: block;
      width: 100%;
      text-align: right;
      position: absolute;
      border-top: none;
      padding: 20px 15px;
      margin-top: 1px;
      top: 100%;
      box-shadow: none;
      background: #fff;
   }
   .ReactTable .-pagination .-previous,
   .ReactTable .-pagination .-center,
   .ReactTable .-pagination .-next {
      display: inline-block;
   }
`