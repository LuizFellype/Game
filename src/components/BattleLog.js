import React from 'react'
import FormatList from './FormatList'

export default ({ status }) =>
    <div>
        <h2>Battle Log</h2>
        <FormatList logHistory={status.historyLog} />
    </div>