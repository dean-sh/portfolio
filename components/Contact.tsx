'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const FORM_ID = 'myzwyaov';

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <section id="contact" className="section">
      <div className="container max-w-2xl space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let&apos;s talk about how I can help with
            forecasting, optimisation, or automation.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {state.succeeded ? (
              <div className="space-y-2 py-8 text-center">
                <p className="text-lg font-medium">Thank you!</p>
                <p className="text-sm text-muted-foreground">
                  Your message is in my inbox — I&apos;ll get back within two
                  working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>

                <ValidationError
                  errors={state.errors}
                  className="text-sm text-destructive"
                />

                <Button type="submit" className="w-full" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <Separator />

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:deanshabi@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            deanshabi@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dean-shabi/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dean-sh/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span>Prague, Czech Republic</span>
        </div>
      </div>
    </section>
  );
}
