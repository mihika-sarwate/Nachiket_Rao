'use client'

export default function ContactForm() {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-heading text-primary mb-6">Send a Message</h3>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-primary font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-primary font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-primary font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    onClick={(e) => {
                        e.preventDefault()
                        alert('Thank you for your message! This is a demo form.')
                    }}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}
