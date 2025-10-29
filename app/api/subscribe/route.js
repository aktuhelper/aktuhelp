import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { email, username } = await req.json(); // get username from client

        // Validate email
        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { success: false, error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Send welcome email via Resend
        const data = await resend.emails.send({
            from: "Aktuhelper <no-reply@aktuhelper.com>", // verified domain
            to: email,
            subject: "Welcome to Aktuhelper 🎉",
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hey ${username || "there"} 👋</h2>
          <p>Thanks for subscribing to <strong>Aktuhelper</strong>!</p>
          <p>You’ll now get updates on:</p>
          <ul>
            <li>New study materials 📚</li>
            <li>Exam notifications 🧠</li>
            <li>Exclusive student resources 🚀</li>
          </ul>
          <p>Stay tuned,<br>The AKTU Helper Team 💙</p>
        </div>
      `,
        });

        return NextResponse.json({
            success: true,
            message: "Email sent successfully!",
            data,
        });
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
