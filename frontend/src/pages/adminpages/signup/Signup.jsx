import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        otp: '',
        accessCode: ''
    });

    const [errors, setErrors] = useState({});
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
        if (!formData.mobileNumber) formErrors.mobileNumber = 'Mobile number is required';
        if (!formData.accessCode) formErrors.accessCode = 'Access code is required';
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Validate access code from database
        const isValidAccessCode = await validateAccessCode(formData.accessCode);
        if (!isValidAccessCode) {
            setErrors({ accessCode: 'Invalid access code' });
            return;
        }

        // Send OTP to mobile number
        await sendOtp(formData.mobileNumber);
        setOtpSent(true);
    };

    const validateAccessCode = async (accessCode) => {
        // Replace with actual API call to validate access code
        return true;
    };

    const sendOtp = async (mobileNumber) => {
        // Replace with actual API call to send OTP
        console.log(`Sending OTP to ${mobileNumber}`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mobile Number</label>
                    <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Access Code</label>
                    <input type="text" name="accessCode" value={formData.accessCode} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.accessCode && <span className="text-red-500 text-sm">{errors.accessCode}</span>}
                </div>
                {otpSent && (
                    <div className="mb-4">
                        <label className="block text-gray-700">OTP</label>
                        <input type="text" name="otp" value={formData.otp} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    </div>
                )}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Signup</button>
            </form>

            already have an account? <a href="/admin/santu" className="text-blue-500">Login</a>

        </div>
    );
};

export default Signup;