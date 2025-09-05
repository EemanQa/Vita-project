$(document).ready(function() {
    const contentData = {
        policy: `
            <h2>Information Security Policy</h2>
            <p>
                Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction.
            </p>
            <p><a class="learn-more" href="compliance/information-security-policy.html">Learn More</a></p>
        `,
        roles: `
            <h2>Roles and Responsibilities</h2>
            <p>
                Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program. Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary.
            </p>
            <p><a class="learn-more" href="compliance/roles-and-responsibilities.html">Learn More</a></p>
        `,
        impact: `
            <h2>Business Impact Analysis</h2>
            <p>
                The Business Impact Analysis (BIA) is a critical component of our organization's information security and continuity planning efforts. It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively.
            </p>
            <p><a class="learn-more" href="compliance/business-impact.html">Learn More</a></p>
        `,
        sensitivity: `
            <h2>IT System and Data Sensitivity Classification</h2>
            <p>We classify IT systems and data based on their sensitivity to ensure the right level of protection...</p>
            <ul>
                <li><strong>Public:</strong> Information intended for general access without restrictions.</li>
                <li><strong>Internal:</strong> Business-use information not for public disclosure.</li>
                <li><strong>Confidential:</strong> Sensitive data requiring controlled access.</li>
                <li><strong>Restricted:</strong> Highly sensitive systems/data with strict protection measures.</li>
            </ul>
            <p><a class="learn-more" href="compliance/it-system-data-sensitivity.html">Learn More</a></p>
        `,
        inventory: `
            <h2>Sensitive IT System Inventory and Definition</h2>
            <p>An inventory of sensitive IT systems helps maintain visibility and proper protection...</p>
            <ul>
                <li><strong>System Name &amp; Owner:</strong> Identification and accountability.</li>
                <li><strong>Data Handled:</strong> Type of sensitive or regulated information processed.</li>
                <li><strong>Criticality:</strong> Impact of downtime or data loss on business operations.</li>
                <li><strong>Controls Applied:</strong> Security measures in place for protection.</li>
            </ul>
            <p><a class="learn-more" href="compliance/sensitive-it-inventory.html">Learn More</a></p>
        `,
        risk: `
            <h2>Risk Assessment</h2>
            <p>Risk assessments evaluate potential threats and vulnerabilities to IT systems and data...</p>
            <ul>
                <li><strong>Identify Assets:</strong> Catalog critical systems, data, and processes.</li>
                <li><strong>Analyze Threats &amp; Vulnerabilities:</strong> Assess possible risks and weaknesses.</li>
                <li><strong>Evaluate Impact &amp; Likelihood:</strong> Measure business impact if risks materialize.</li>
                <li><strong>Mitigation Plans:</strong> Recommend controls and prioritize risk treatments.</li>
            </ul>
            <p><a class="learn-more" href="compliance/risk-assessment.html">Learn More</a></p>
        `,
        audits: `
            <h2>IT Security Audits</h2>
            <p>IT security audits are conducted to evaluate the effectiveness of security measures...</p>
            <ul>
                <li><strong>Compliance Review:</strong> Ensures alignment with industry standards (ISO, NIST, GDPR).</li>
                <li><strong>Vulnerability Assessment:</strong> Identifies weaknesses in systems, networks, and processes.</li>
                <li><strong>Control Effectiveness:</strong> Tests whether implemented safeguards are working as intended.</li>
                <li><strong>Continuous Improvement:</strong> Provides recommendations to reduce risks and enhance resilience.</li>
            </ul>
            <p><a class="learn-more" href="compliance/it-security-audits.html">Learn More</a></p>
        `,
        catalog: `
            <h2>Security Controls Catalog</h2>
            <p>The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data...</p>
            <ul>
                <li><strong>Access Controls:</strong> Role-based access, authentication, and authorization policies.</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention, and segmentation.</li>
                <li><strong>Data Protection:</strong> Encryption, backup, and secure data handling processes.</li>
                <li><strong>Monitoring &amp; Logging:</strong> Continuous monitoring of systems for anomalies and threats.</li>
                <li><strong>Incident Response:</strong> Defined processes to detect, respond, and recover from security incidents.</li>
            </ul>
            <p><a class="learn-more" href="compliance/security-controls-catalog.html">Learn More</a></p>
        `
    };

    // initialize: default content
    $('#compliance-list li').removeClass('selected');
    $('#compliance-list li[data-content="policy"]').addClass('selected');
    $('#compliance-content').html(contentData.policy);

    // click handler
    $('#compliance-list').on('click', 'li', function() {
        $('#compliance-list li').removeClass('selected');
        $(this).addClass('selected');
        const key = $(this).data('content');
        $('#compliance-content').html(contentData[key] || '<h2>Content not available</h2><p>The requested content is not available.</p>');
    });
});
