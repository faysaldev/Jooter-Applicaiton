'use client'

import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !newPassword || !confirmPassword) {
      setError('Please fill all fields')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      const { data } = await axios.post('/api/auth/forgot-password', {
        email,
        newPassword,
        confirmPassword,
      })

      setSuccess(data.message)
      setEmail('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      maxWidth={400}
      mx="auto"
      mt={8}
      p={4}
      boxShadow={3}
      borderRadius={2}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" mb={3} align="center" fontWeight="bold">
        Reset Password
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextField
        label="New Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
        inputProps={{ minLength: 6 }}
      />

      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        inputProps={{ minLength: 6 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? 'Resetting...' : 'Reset Password'}
      </Button>
    </Box>
  )
}
