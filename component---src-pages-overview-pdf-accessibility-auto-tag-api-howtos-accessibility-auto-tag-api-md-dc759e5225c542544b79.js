"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6932],{92695:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return l},default:function(){return m}});var a,i=n(87462),o=n(63366),r=(n(15007),n(64983)),s=n(99536),p=["components"],l={},u=(a="CodeBlock",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}),d={_frontmatter:l},g=s.Z;function m(t){var e=t.components,n=(0,o.Z)(t,p);return(0,r.mdx)(g,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"pdf-accessibility-auto-tag-apiavailable-under-early-access-program"},(0,r.mdx)("h1",null,"PDF Accessibility Auto-Tag API",(0,r.mdx)("span",{style:{color:"red",fontSize:"15px",marginLeft:"10px",verticalAlign:"middle",border:"1px solid",paddingLeft:"2px",paddingRight:"2px"}},(0,r.mdx)("b",null,"Available under Early Access Program")))),(0,r.mdx)("h2",{id:"pdf-accessibility-auto-tag-api-output-format"},"PDF Accessibility Auto-Tag API Output Format"),(0,r.mdx)("p",null,"The output of PDF Accessibility Auto-Tag API contains the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The tagged PDF file of version 1.7 with headings shifted if the option of shift headings is set."),(0,r.mdx)("li",{parentName:"ul"},"A report in XLSX format, which provides information related to tagging of the document. This will be generated if report generation is enabled.")),(0,r.mdx)("h2",{id:"api-limitations"},"API limitations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"File size:")," Files up to a maximum of 100 MB are supported."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Number of Pages:")," Non-scanned PDFs up to 200 pages and scanned PDFs up to 100 pages are supported, however limits may be lower for files with a large number of tables."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Rate limits:")," Keep request rate below 25 requests per minute."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Page Size:")," The API supports standard page sizes not more than 17.5” or less than 6” in either dimension."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Hidden Objects:")," PDF files that contain content that is not visible on the page like Javascript, OCG (optional content groups), etc are not supported. Files that contain such hidden information may fail to process. For such cases, ",(0,r.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/acrobat/using/removing-sensitive-content-pdfs.html"},"removing hidden content")," prior to processing files again may return a successful result."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Language:")," The API is currently optimized for English language content. Files containing content in French, German, Spanish, Danish, Dutch, Norwegian (Bokmal), Galician, Catalan, Finnish, Italian, Swedish, Portuguese, and Romanian should return good results most of the time. Files containing content in Afrikaans, Bosnian, Croatian, Czech, Hungarian, Indonesian, Malay, Polish, Russian, Serbian, Turkish, Hindi, Marathi and other similar languages should return good results often. Non-English files may have issues with non-English punctuation. OCR is configured for English content."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"OCR and Scan quality:")," The quality of text extracted from scanned files is dependent on the clarity of content in the input file and is currently configured for English content. Conditions like skewed pages, shadowing, obscured or overlapping fonts, and page resolution less than 200 DPI can all result in lower quality text output."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Form fields:")," Files containing XFA and other fillable form elements are not supported."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Unprotected files:")," The API supports files that are unprotected or where security restrictions allow editing of content. Files that are secured and do not allow editing of content will not be processed."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Annotations:")," Content in PDF files containing annotations such as highlights and sticky notes will be processed, but annotations that obscure text could impact output quality. Text within annotations will not be included in the output."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Producers:")," The PDF Accessibility Auto-Tag API is designed to add tags to PDF to make it easier to make the file accessible. Files created from applications that produce other types of content like illustrations, CAD drawings or other types of vector art may not return high quality results."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Collections:")," PDFs that are made from a collection of files including PDF Portfolios are not currently supported.")),(0,r.mdx)("h2",{id:"error-codes"},"Error codes"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Scenario"),(0,r.mdx)("th",{parentName:"tr",align:null},"Error code"),(0,r.mdx)("th",{parentName:"tr",align:null},"Error message"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unknown error/ failure"),(0,r.mdx)("td",{parentName:"tr",align:null},"ERROR"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unexpected error")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Timeout"),(0,r.mdx)("td",{parentName:"tr",align:null},"TIMEOUT"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unexpected error: Processing timeout")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Disqualified"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unsupported XFA file"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_XFA"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File contains an XFA form")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Page limit violation"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_PAGE_LIMIT"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File exceeds page limit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Scan page limit violation"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_SCAN_PAGE_LIMIT"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: Scanned file exceeds page limit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"File size violation"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_FILE_SIZE"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File exceeds size limit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Encryption permission"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_PERMISSIONS"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File permissions do not allow conversion")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Complex file"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_COMPLEX_FILE"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File content is too complex")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unsupported language"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_LANGUAGE"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion: File content language is unsupported")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Bad PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"The PDF file is damaged or its content is too complex")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Bad PDF file type"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_FILE_TYPE"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file is not a PDF file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Damaged input file"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_DAMAGED"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file is damaged")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Complex table"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_COMPLEX_TABLE"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file contains a table that is too complex to process")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Complex content"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_COMPLEX_INPUT"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file contains content that is too complex to process")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unsupported font"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_UNSUPPORTED_FONT"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file contains font data that is corrupted or not supported")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Large PDF file"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF_LARGE_FILE"),(0,r.mdx)("td",{parentName:"tr",align:null},"The input file size exceeds the maximum allowed")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Protected PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"PROTECTED_PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"PDF is encrypted or password-protected")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Empty or corrupted input"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_INPUT"),(0,r.mdx)("td",{parentName:"tr",align:null},"Input is corrupted or empty")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Invalid input parameters"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_INPUT_PARAMS"),(0,r.mdx)("td",{parentName:"tr",align:null},"Invalid input parameters")))),(0,r.mdx)("h2",{id:"generate-tagged-pdf-with-version-17-along-with-an-xlsx-report-and-shift-the-headings-in-the-output-pdf-file"},"Generate tagged PDF with version 1.7 along with an XLSX report and shift the headings in the output PDF file"),(0,r.mdx)("p",null,"The sample below generate tagged PDF of version 1.7 along with an XLSX report and shift the headings in the output PDF file."),(0,r.mdx)(u,{slots:"heading, code",repeat:"2",languages:"Java, Python",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://git.corp.adobe.com/dc/dc-cpf-sdk-java-samples/tree/beta\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithOptions \n\npublic class AutotagPDFWithOptions {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithOptions.class);\n\n    public static void main(String[] args) {\n\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation\n            autotagPDFOperation.setInput(FileRef.createFromLocalFile("src/main/resources/autotagPdfInput.pdf"));\n\n            // Build AutotagPDF options and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .shiftHeadings()\n                    .generateReport()\n                    .build();\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            autotagOutputFiles.saveTaggedPDF("output/AutotagPDFWithOptions-tagged.pdf");\n            autotagOutputFiles.saveReport("output/AutotagPDFWithOptions-report.xlsx");\n\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h4",{id:"python"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://git.corp.adobe.com/dc/dc-cpf-python-sdk-samples/tree/beta\n# Run the sample:\n# python src/autotagpdf/autotag_pdf_with_options.py\n\n    logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO'))\n\n    try:\n        # get base path.\n        base_path = str(Path(__file__).parents[2])\n    \n        # Initial setup, create credentials instance.\n        credentials = Credentials.service_account_credentials_builder() \\\n            .from_file(base_path + '/pdfservices-api-credentials.json') \\\n            .build()\n    \n        # Create an ExecutionContext using credentials and create a new operation instance.\n        execution_context = ExecutionContext.create(credentials)\n        autotag_pdf_operation = AutotagPDFOperation.create_new()\n    \n        # Set operation input from a source file.\n        input_file_path = 'autotagPdfInput.pdf'\n        source = FileRef.create_from_local_file(base_path + '/resources/' + input_file_path)\n        autotag_pdf_operation.set_input(source)\n    \n        # Build AutotagPDF options and set them into the operation\n        autotag_pdf_options: AutotagPDFOptions = AutotagPDFOptions.builder()\\\n            .with_shift_headings()\\\n            .with_generate_report()\\\n            .build()\n        autotag_pdf_operation.set_options(autotag_pdf_options)\n    \n        # Execute the operation.\n        autotag_output_files: AutotagPDFOutputFiles = autotag_pdf_operation.execute(execution_context)\n    \n        input_file_name = Path(input_file_path).stem\n        base_output_path = base_path + '/output/AutotagPDFWithOptions/'\n    \n        Path(base_output_path).mkdir(parents=True, exist_ok=True)\n        tagged_pdf_path = f'{base_output_path}{input_file_name}-tagged.pdf'\n        report_path = f'{base_output_path}{input_file_name}-report.xlsx'\n    \n        # Save the result to the specified location.\n        autotag_output_files.save_pdf_file(tagged_pdf_path)\n        autotag_output_files.save_xls_file(report_path)\n    \n    except (ServiceApiException, ServiceUsageException, SdkException) as e:\n        logging.exception(f'Exception encountered while executing operation: {e}')\n")),(0,r.mdx)("h2",{id:"generate-tagged-pdf-from-a-pdf"},"Generate tagged PDF from a PDF"),(0,r.mdx)("p",null,"The sample below generates tagged PDF from a PDF."),(0,r.mdx)(u,{slots:"heading, code",repeat:"2",languages:"Java, Python",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://git.corp.adobe.com/dc/dc-cpf-sdk-java-samples/tree/beta\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDF\n\npublic class AutotagPDF {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDF.class);\n\n    public static void main(String[] args) {\n\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation\n            autotagPDFOperation.setInput(FileRef.createFromLocalFile("src/main/resources/autotagPdfInput.pdf"));\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            autotagOutputFiles.saveTaggedPDF("output/AutotagPDF-tagged.pdf");\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}  \n')),(0,r.mdx)("h4",{id:"python-1"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://git.corp.adobe.com/dc/dc-cpf-python-sdk-samples/tree/beta\n# Run the sample:\n# python src/autotagpdf/autotag_pdf.py\n\n    logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO'))\n    \n    try:\n        # get base path.\n        base_path = str(Path(__file__).parents[2])\n    \n        # Initial setup, create credentials instance.\n        credentials = Credentials.service_account_credentials_builder() \\\n            .from_file(base_path + '/pdfservices-api-credentials.json') \\\n            .build()\n    \n        # Create an ExecutionContext using credentials and create a new operation instance.\n        execution_context = ExecutionContext.create(credentials)\n        autotag_pdf_operation = AutotagPDFOperation.create_new()\n    \n        # Set operation input from a source file.\n        input_file_path = 'autotagPdfInput.pdf'\n        source = FileRef.create_from_local_file(base_path + '/resources/' + input_file_path)\n        autotag_pdf_operation.set_input(source)\n    \n        # Execute the operation.\n        autotag_output_files: AutotagPDFOutputFiles = autotag_pdf_operation.execute(execution_context)\n    \n        input_file_name = Path(input_file_path).stem\n        base_output_path = base_path + '/output/AutotagPDF/'\n    \n        Path(base_output_path).mkdir(parents=True, exist_ok=True)\n        tagged_pdf_path = f'{base_output_path}{input_file_name}-tagged.pdf'\n    \n        # Save the result to the specified location.\n        autotag_output_files.save_pdf_file(tagged_pdf_path)\n    \n    except (ServiceApiException, ServiceUsageException, SdkException) as e:\n        logging.exception(f'Exception encountered while executing operation: {e}')\n")),(0,r.mdx)("h2",{id:"generates-tagged-pdf-by-setting-options-with-command-line-arguments"},"Generates tagged PDF by setting options with command line arguments"),(0,r.mdx)("p",null,"The sample below generates tagged PDF by setting options through command line arguments."),(0,r.mdx)("p",null,"Here is a sample list of command line arguments and their description:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"--input < input file path >"),(0,r.mdx)("li",{parentName:"ul"},"--output < output file path >"),(0,r.mdx)("li",{parentName:"ul"},"--report { If this argument is present then the output will be generated with the report }"),(0,r.mdx)("li",{parentName:"ul"},"--shift_headings { If this argument is present then the headings will be shifted in the output PDF file }")),(0,r.mdx)(u,{slots:"heading, code",repeat:"2",languages:"Java, Python",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://git.corp.adobe.com/dc/dc-cpf-sdk-java-samples/tree/beta\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFParamaterised -Dexec.args="--report --shift_headings --input src/main/resources/autotagPdfInput.pdf --output output/"\n\npublic class AutotagPDFParamaterised {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithOptions.class);\n\n    public static void main(String[] args) {\n        LOGGER.info("--input " + getInputFilePathFromCmdArgs(args));\n        LOGGER.info("--output " + getOutputFilePathFromCmdArgs(args));\n        LOGGER.info("--report " + getGenerateReportFromCmdArgs(args));\n        LOGGER.info("--shift_headings " + getShiftHeadingsFromCmdArgs(args));\n\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Set input for operation from command line args\n            autotagPDFOperation.setInput(FileRef.createFromLocalFile(getInputFilePathFromCmdArgs(args)));\n\n            // Get and Build AutotagPDF options from command line args and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = getOptionsFromCmdArgs(args);\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            String outputPath = getOutputFilePathFromCmdArgs(args);\n            autotagOutputFiles.saveTaggedPDF(outputPath + "AutotagPDFParameterised-tagged.pdf");\n            if (autotagPDFOptions != null && autotagPDFOptions.isGenerateReport())\n                autotagOutputFiles.saveReport(outputPath + "AutotagPDFParameterised-report.xlsx");\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n\n    private static AutotagPDFOptions getOptionsFromCmdArgs(String[] args) {\n        Boolean generateReport = getGenerateReportFromCmdArgs(args);\n        Boolean shiftHeadings = getShiftHeadingsFromCmdArgs(args);\n\n        AutotagPDFOptions.Builder builder = AutotagPDFOptions.autotagPDFOptionsBuilder();\n\n        if (generateReport)\n            builder.generateReport();\n        if (shiftHeadings)\n            builder.shiftHeadings();\n\n        return builder.build();\n    }\n\n    private static Boolean getShiftHeadingsFromCmdArgs(String[] args) {\n        return Arrays.asList(args).contains("--shift_headings");\n    }\n\n    private static Boolean getGenerateReportFromCmdArgs(String[] args) {\n        return Arrays.asList(args).contains("--report");\n    }\n\n    private static String getInputFilePathFromCmdArgs(String[] args) {\n        String inputFilePath = "src/main/resources/autotagPdfInput.pdf";\n        int inputFilePathIndex = Arrays.asList(args).indexOf("--input");\n        if (inputFilePathIndex >= 0 && inputFilePathIndex < args.length - 1) {\n            inputFilePath = args[inputFilePathIndex + 1];\n        } else\n            LOGGER.info("input file not specified, using default value : autotagPdfInput.pdf");\n\n        return inputFilePath;\n    }\n\n    private static String getOutputFilePathFromCmdArgs(String[] args) {\n        String outputFilePath = "output/";\n        int outputFilePathIndex = Arrays.asList(args).indexOf("--output");\n        if (outputFilePathIndex >= 0 && outputFilePathIndex < args.length - 1) {\n            outputFilePath = args[outputFilePathIndex + 1];\n        } else\n            LOGGER.info("output path not specified, using default value : output/");\n\n        return outputFilePath;\n    }\n} \n')),(0,r.mdx)("h4",{id:"python-2"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://git.corp.adobe.com/dc/dc-cpf-python-sdk-samples/tree/beta\n# Run the sample:\n# python src/autotagpdf/autotag_pdf_parameterised.py --report --shift_headings --input resources/autotagPdfInput.pdf --output output/\n\n    logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO'))\n\n \n    class AutotagPDFParameterised:\n    \n        _input_path: str\n        _output_path: str\n        _generate_report: bool\n        _shift_headings: bool\n    \n        base_path = str(Path(__file__).parents[2])\n    \n        def __init__(self):\n            pass\n    \n        @staticmethod\n        def parse_args(*args: str):\n            if not args:\n                args = sys.argv[1:]\n            parser = argparse.ArgumentParser(description='Autotag PDF')\n    \n            parser.add_argument('--input', help='Input file path', type=Path, metavar='input')\n            parser.add_argument('--output', help='Output path', type=Path, dest='output')\n            parser.add_argument('--report', dest='report', action='store_true', help='Generate report(in XLSX format)',\n                                default=False)\n            parser.add_argument('--shift_headings', dest='shift_headings', action='store_true', help='Shift headings',\n                                default=False)\n    \n            return parser.parse_args(args)\n    \n        def get_default_input_file_path(self) -> str:\n            return self.base_path + '/resources/autotagPdfInput.pdf'\n    \n        def get_default_output_file_path(self) -> str:\n            return self.base_path + '/output/AutotagPDFParameterised'\n    \n        def get_autotag_pdf_options(self) -> AutotagPDFOptions:\n            shift_headings = self._shift_headings\n            generate_report = self._generate_report\n    \n            builder: AutotagPDFOptions.Builder = AutotagPDFOptions.builder()\n            if shift_headings:\n                builder.with_shift_headings()\n            if generate_report:\n                builder.with_generate_report()\n            return builder.build()\n    \n        def execute(self, *args: str) -> None:\n            args = self.parse_args(*args)\n            self._input_path = args.input if args.input else self.get_default_input_file_path()\n            self._output_path = args.output if args.output else self.get_default_output_file_path()\n            self._generate_report = args.report\n            self._shift_headings = args.shift_headings\n    \n            self.autotag_pdf()\n    \n        def autotag_pdf(self):\n            try:\n                # Initial setup, create credentials instance.\n                credentials = Credentials.service_account_credentials_builder() \\\n                    .from_file(self.base_path + '/pdfservices-api-credentials.json') \\\n                    .build()\n    \n                # Create an ExecutionContext using credentials and create a new operation instance.\n                execution_context = ExecutionContext.create(credentials)\n                autotag_pdf_operation = AutotagPDFOperation.create_new()\n    \n                # Set operation input from a source file.\n                source = FileRef.create_from_local_file(self._input_path)\n                autotag_pdf_operation.set_input(source)\n    \n                # Build AutotagPDF options and set them into the operation\n                autotag_pdf_operation.set_options(self.get_autotag_pdf_options())\n    \n                # Execute the operation.\n                autotag_output_files: AutotagPDFOutputFiles = autotag_pdf_operation.execute(execution_context)\n    \n                input_file_name = Path(self._input_path).stem\n                base_output_path = self._output_path\n    \n                Path(base_output_path).mkdir(parents=True, exist_ok=True)\n    \n                # Save the result to the specified location.\n                tagged_pdf_path = f'{base_output_path}/{input_file_name}-tagged.pdf'\n                autotag_output_files.save_pdf_file(tagged_pdf_path)\n                if self._generate_report:\n                    report_path = f'{base_output_path}/{input_file_name}-report.xlsx'\n                    autotag_output_files.save_xls_file(report_path)\n    \n            except (ServiceApiException, ServiceUsageException, SdkException) as e:\n                logging.exception(f'Exception encountered while executing operation: {e}')\n    \n    \n    if __name__ == \"__main__\":\n        autotag_pdf_parameterised = AutotagPDFParameterised()\n        autotag_pdf_parameterised.execute()\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-accessibility-auto-tag-api-howtos-accessibility-auto-tag-api-md-dc759e5225c542544b79.js.map