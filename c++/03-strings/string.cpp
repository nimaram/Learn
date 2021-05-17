#include <iostream>

using namespace std;

int main(){
    string phrase = "Have a nice day!";
    cout << phrase << endl;
    cout << phrase.length() << endl;
    cout << phrase[0] << endl;
    cout << phrase[7] << endl;
    cout << phrase.find("nice") << endl;
    cout << phrase.substr(0,3) << endl;

    return 0;
}
