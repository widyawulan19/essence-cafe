import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AdminLayouts() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />

      <main style={{ flex: 1, padding: "24px" }}>
        <Outlet/>
      </main>

    </div>
  )
}

export default AdminLayouts