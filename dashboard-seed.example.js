/*
 * GoTeam Dashboard — seed data template
 *
 * Copy this file to `dashboard-seed.js` to populate the dashboard on first run.
 * `dashboard-seed.js` is GITIGNORED — your local copy never reaches the public repo.
 *
 * For real data, ask Claude to "refresh the dashboard" in a conversation — it will
 * read your inbox and rewrite dashboard-seed.js with current CLEAR-A-PATH endorsements.
 */

(function () {
  function defaultExitChecklist(opts) {
    opts = opts || {};
    const items = ["Knowledge transfer", "Disable email & SSO accounts", "Revoke software licenses", "Return laptop & peripherals", "Return company badge", "Final payslip processed", "Exit interview completed", "Manager sign-off"];
    return items.map(label => ({ label, done: opts.all ? true : !!opts[label] }));
  }
  window.defaultExitChecklist = defaultExitChecklist;

  window.__GOTEAM_SEED__ = {
    hires: [
      // Example hire — replace with your data
      {
        id: 1,
        starterName: "Jane Doe",
        nickname: "Jane",
        position: "Example Position",
        phShiftSchedule: "9:00 AM to 6:00 PM",
        companyName: "Example Client Co.",
        hireType: "Expansion",   // Expansion | Replacement | New Client
        startDate: "2026-06-01", // YYYY-MM-DD
        status: "Pending",        // Pending | In Progress | Withdrawn
        hcId: "9999"
      }
    ],

    departures: [
      // Example departure — replace with your data
      {
        id: 1,
        name: "John Smith",
        company: "Example Client Co.",
        lastDay: "2026-05-31",
        reason: "End of Contract",  // End of Contract | Resignation | Voluntary Resignation | Immediate Resignation
        noticeDate: "2026-05-01",
        status: "Notice Period",     // Notice Period | Asset Return | Completed
        tmId: "1234",
        checklist: defaultExitChecklist()
      }
    ],

    licenses: [
      { id: 1, product: "Microsoft 365 Business", vendor: "Microsoft", total: 50, used: 30, unitCost: 12.50, renewal: "2026-12-31" }
    ],

    assignments: [
      // { id: 1, user: "Jane Doe", product: "Microsoft 365 Business", assigned: "2026-06-01", status: "Active" }
    ]
  };
})();
