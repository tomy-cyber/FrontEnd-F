import PageBreadcrumb from "@/components/common/PageBreadCrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investment Protection | FSCS Information",
  description: "Information about FSCS investment protection and compensation limits",
}

export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Investment Protection" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[900px]">
          <h2 className="mb-6 text-center font-semibold text-gray-800 text-2xl dark:text-white/90 sm:text-3xl">
            FSCS Investment Protection
          </h2>

          <div className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              If you have an investment (or you were advised to invest) and the provider or adviser has gone out of
              business, you may be able to claim compensation with FSCS. Whether you already have an investment or are
              thinking of investing, you should check that it's FSCS protected.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              If you've got money to invest, there's never been such a range of investment ideas and products. But our
              protection varies depending on the type of product, and some investment products aren't protected at all.
              To be sure, check what we protect by using our investment protection checker.
            </p>
          </div>

          {/* Compensation Limits Section */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/30">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Compensation Limits</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Maximum compensation available based on when the firm failed
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-b border-gray-100 pb-3 dark:border-gray-700">
                <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">After April 1, 2019</h4>
                  <p className="text-gray-600 dark:text-gray-300">Up to £585,000 per eligible person, per firm</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-gray-100 pb-3 dark:border-gray-700">
                <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">January 1, 2010 - March 31, 2019</h4>
                  <p className="text-gray-600 dark:text-gray-300">Up to £482,000 per eligible person, per firm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Before January 1, 2010</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    100% of the first £130,000 and 90% of the next £120,000 up to £248,000 per eligible person, per firm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/30">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                How to Check FSCS Investment Protection
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Follow these steps to verify your investment is protected
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Check your provider is authorised</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Check your provider is authorised by the Financial Conduct Authority (FCA) or Prudential Regulation
                    Authority (PRA).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Verify the activity is regulated</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Be aware that the particular activity (such as providing advice) that the authorised firm is
                    carrying out for you must be regulated by the PRA or the FCA for FSCS protection to apply.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Confirm with your firm</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ask your firm to confirm that the activity they are carrying out for you is a regulated activity and
                    FSCS protected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/20">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-amber-600 dark:text-amber-500"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="mb-1 font-medium text-amber-800 dark:text-amber-400">
                  Know the risks before you invest
                </h4>
                <p className="text-amber-700 dark:text-amber-300">
                  Beware of investments offering high returns. Only invest if you're prepared, and can afford, to lose
                  your money. These resources will help to make sure you're prepared before you invest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
