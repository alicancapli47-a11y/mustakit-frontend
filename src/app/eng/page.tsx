import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mustakit Studio - Virtual Tours for Land & Construction Projects",
  description: "Professional video production for real estate agents, landowners, and developers. Land plot videos and pre-construction project visualizations. 1-2 day delivery.",
  keywords: "land video, real estate video, pre-construction video, off-plan property video, drone video, construction project video",
}

export default function EnglishHomePage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419" }}>
            Mustakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </span>
          <span style={{ background: "#F26419", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
            Professional Video
          </span>
        </div>
      </nav>

      <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(242,100,25,0.2)", border: "1px solid rgba(242,100,25,0.5)", color: "#F26419", fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
          Video Production Service
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Virtual Tours for Land &amp; <span style={{ color: "#F26419" }}>Construction Projects</span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Showcase your land or pre-construction project with a professional video. Built for agents, landowners, and developers. Delivered in 1-2 business days.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 700, margin: "0 auto" }}>
          <Link href="https://studio.mustakit.com/eng" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏞️</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Land Video</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>For agents and landowners marketing a plot</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>$75</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Order Now
            </div>
          </Link>

          <Link href="https://studio.mustakit.com/eng/construction-project" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏗️</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Construction Project Video</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>For developers selling pre-construction or off-plan units</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>$80</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Order Now
            </div>
          </Link>
        </div>
      </div>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>How It Works</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 40 }}>Your video, ready in 4 steps</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>01</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Choose a Service</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Pick the land video or the construction project video.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>02</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Upload Details</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Photos, site plans, or blueprints — plus a short description.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>03</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Pay a Deposit</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>20% to confirm the order. The rest is due on delivery.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>04</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Get Your Video</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Delivered to your inbox within 1-2 business days.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F4F1", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Pricing</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800 }}>Two Services, Clear Pricing</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #F26419", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#F26419", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Land Video</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>$75</div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Video built from your land photos</li>
                  <li>+ Location &amp; feature narration</li>
                  <li>+ 30-60 second HD video</li>
                  <li>+ 1 round of revisions</li>
                </ul>
                <Link href="https://studio.mustakit.com/eng" style={{ display: "block", width: "100%", background: "#F26419", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Order Now
                </Link>
              </div>
            </div>

            <div style={{ border: "2px solid #1a1a1a", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#1a1a1a", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Construction Project Video</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>$80</div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Built from blueprints &amp; site plans</li>
                  <li>+ Designed for developers</li>
                  <li>+ Project narration script</li>
                  <li>+ 1 round of revisions</li>
                </ul>
                <Link href="https://studio.mustakit.com/eng/construction-project" style={{ display: "block", width: "100%", background: "#1a1a1a", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 800 }}>Why video sells faster</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center" }}>
            <div>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>403%</div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>more inquiries on listings with video</div>
            </div>
            <div>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>73%</div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>of buyers contact faster after watching a video</div>
            </div>
            <div>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>1-2</div>
              <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>business days from order to delivery</div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>© 2025 Mustakit · The most transparent way to bring your land or project to life on screen</p>
        <p style={{ marginTop: 8 }}>studio.mustakit.com/eng · Professional Video Service</p>
      </footer>
    </main>
  )
}
