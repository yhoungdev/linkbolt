interface ExtensionResponse {
    success: boolean;
    message: string;
  }
  
  declare namespace chrome.runtime {
    function sendMessage(extensionId: string, message: any, responseCallback?: (response: ExtensionResponse) => void): void;
  }
  
 export  const sendTokenToChromeExtension = ({ extensionId, jwt }: { extensionId: string; jwt: string }): Promise<ExtensionResponse> => {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(extensionId, { jwt }, (response: ExtensionResponse) => {
        if (!response.success) {
          console.log('error sending message', response);
          reject(response);
        } else {
          console.log('Success ::: ', response.message);
          resolve(response);
        }
      });
    });
  };
  