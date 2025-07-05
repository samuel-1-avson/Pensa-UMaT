import Link from "next/link"
import { Church, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-yellow-400" />
              <span className="font-playfair text-xl font-bold">Grace Community Church</span>
            </div>
            <p className="text-slate-300 mb-4">
              A vibrant community of faith, hope, and love. We welcome everyone to join us in worship, fellowship, and
              service to our community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-slate-300 text-sm">123 Faith Street, Hope City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-slate-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-slate-300 text-sm">info@gracecommunity.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
