import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useFormValidation } from '../hooks/useFormValidation';
import FormField from './FormField';

const ContactForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email'
  };

  const validationRules = {
    firstName: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s'-]+$/,
      custom: (value: string) => {
        if (value && !/^[a-zA-Z]/.test(value)) {
          return 'First name must start with a letter';
        }
        return null;
      }
    },
    lastName: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s'-]+$/
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      custom: (value: string) => {
        if (value && value.includes('..')) {
          return 'Email cannot contain consecutive dots';
        }
        return null;
      }
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/
    },
    service: {
      required: true
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 500
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    handleFocus,
    validateForm,
    resetForm
  } = useFormValidation(initialValues, validationRules);

  const services = [
    'Platelet Rich Plasma (PRP)',
    'IV Fluid Therapy',
    'Peptide Therapy',
    'Functional Medicine Consultation',
    'Hormone Optimization',
    'Sexual Health Program',
    'Hair Restoration',
    'Weight Management',
    'General Consultation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please correct the errors above before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error randomly for demo
      if (Math.random() > 0.2) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        resetForm();
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubmitButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Sending...
        </>
      );
    }
    return (
      <>
        <Send className="h-5 w-5" />
        Send Message
      </>
    );
  };

  const isFormValid = Object.keys(validationRules).every(field => 
    !errors[field] && values[field] && values[field].trim() !== ''
  );

  return (
    <section className="py-20 bg-whisper-grey">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-700 font-open-sans max-w-2xl mx-auto">
            Ready to begin your journey to optimal health and confidence? Contact us to schedule your personalized consultation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-open-sans">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="First Name"
                name="firstName"
                value={values.firstName}
                error={errors.firstName}
                touched={touched.firstName}
                placeholder="Enter your first name"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                helpText="Only letters, spaces, hyphens, and apostrophes allowed"
                maxLength={50}
              />

              <FormField
                label="Last Name"
                name="lastName"
                value={values.lastName}
                error={errors.lastName}
                touched={touched.lastName}
                placeholder="Enter your last name"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                maxLength={50}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                placeholder="your.email@example.com"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                helpText="We'll use this to send you appointment confirmations"
              />

              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={values.phone}
                error={errors.phone}
                touched={touched.phone}
                placeholder="(555) 123-4567"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                helpText="Include country code if outside the US"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-semibold text-jet-black font-inter">
                Service of Interest
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={(e) => handleChange('service', e.target.value)}
                onBlur={() => handleBlur('service')}
                onFocus={() => handleFocus('service')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-open-sans transition-all duration-200 focus:outline-none focus:ring-0 ${
                  touched.service && errors.service
                    ? 'border-red-300 bg-red-50 focus:border-red-500'
                    : touched.service && !errors.service && values.service
                      ? 'border-green-300 bg-green-50 focus:border-green-500'
                      : 'border-gray-300 bg-white focus:border-jade-green hover:border-gray-400'
                }`}
              >
                <option value="">Select a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              {touched.service && errors.service && (
                <div className="flex items-center space-x-1 text-red-600">
                  <span className="text-sm font-open-sans">{errors.service}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-jet-black font-inter">
                Preferred Contact Method
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={values.preferredContact === 'email'}
                    onChange={(e) => handleChange('preferredContact', e.target.value)}
                    className="w-4 h-4 text-jade-green border-gray-300 focus:ring-jade-green"
                  />
                  <span className="text-sm font-open-sans text-gray-700">Email</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={values.preferredContact === 'phone'}
                    onChange={(e) => handleChange('preferredContact', e.target.value)}
                    className="w-4 h-4 text-jade-green border-gray-300 focus:ring-jade-green"
                  />
                  <span className="text-sm font-open-sans text-gray-700">Phone</span>
                </label>
              </div>
            </div>

            <FormField
              label="Message"
              name="message"
              type="textarea"
              value={values.message}
              error={errors.message}
              touched={touched.message}
              placeholder="Tell us about your health goals, concerns, or questions..."
              required
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              helpText="Describe what you'd like to achieve or any specific concerns"
              maxLength={500}
            />

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-open-sans text-sm">{submitMessage}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`flex-1 flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide transition-all duration-200 ${
                  isSubmitting || !isFormValid
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-jade-green text-white hover:bg-jade-green/90 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {getSubmitButtonContent()}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                disabled={isSubmitting}
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear Form
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-500 font-open-sans">
                By submitting this form, you agree to our privacy policy and consent to be contacted about our services.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;