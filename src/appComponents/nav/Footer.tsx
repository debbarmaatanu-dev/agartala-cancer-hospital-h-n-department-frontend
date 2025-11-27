export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-gray-200 bg-white"
      role="contentinfo">
      <div className="xxxs:px-6 xxxs:py-8 mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="xxs:grid-cols-2 xxxs:gap-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <h3 className="xxxs:text-lg text-base font-semibold text-blue-600">
              ABVRCC
            </h3>
            <p className="xxxs:text-sm text-xs text-gray-600">
              Atal Bihari Vajpayee Regional Cancer Centre
            </p>
            <p className="xxxs:text-sm text-xs text-gray-500">
              Head & Neck Department
            </p>
          </div>

          <div className="flex flex-col space-y-2" id="about">
            <h4 className="xxxs:text-base text-sm font-semibold text-gray-800">
              About
            </h4>
            <p className="xxxs:text-sm text-xs leading-relaxed text-gray-600">
              Internal patient record management system for healthcare
              professionals.
            </p>
          </div>

          <div className="flex flex-col space-y-2" id="contact">
            <h4 className="xxxs:text-base text-sm font-semibold text-gray-800">
              Contact
            </h4>
            <address className="xxxs:text-sm space-y-1 text-xs text-gray-600 not-italic">
              <p>Head & Neck Department</p>
              <p>Regional Cancer Centre</p>
            </address>
          </div>
        </div>

        <div className="xxxs:mt-8 mt-6 border-t border-gray-200 pt-6 text-center">
          <p className="xxxs:text-sm text-xs text-gray-500">
            &copy; {currentYear} ABVRCC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
