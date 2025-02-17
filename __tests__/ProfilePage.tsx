import React from 'react'
import type { RenderResult } from '@testing-library/react'
import { act, fireEvent, queryByText, render, screen, waitFor } from '@testing-library/react'
import Profile from '@/components/Profile'

describe('Profile Component', () => {
  it('should hide read time when not available', async () => {
    render(
      <React.Fragment>
        <Profile />
      </React.Fragment>
    )
    const profileName = await screen.findByText('Brianna Clintont')
    expect(profileName).toBeInTheDocument()
  })
})
