import { storage, Context } from "near-sdk-as";
export class Greeting {
    getGreeting(accountId: string): string | null {

        return storage.get<string>(accountId, "Greeting not available");
    }   

    setGreeting(geeting: string): void {
        storage.set(Context.sender, greeting);
    }
}