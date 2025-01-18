import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAibm9ub21ub3Vucy1saW5rcmlwcGxlLnZlcmNlbC5hcHAifQ",
      signature: "MHg0MWYxMzE0ZTIzYmMxYjU0ZWUwZDg3MjMzNjJmZDk3ODk4OWIyZmU3ZGZhMzMzMDU1MWY1YjczMTkyNzU3ZDk1NjA5MzRlMTVmMjg1YzY3MTk4MmEyZTQyYWIzN2NiNmJmZWU0MmMwMjE2ZTUzOTVjODM1MzUzMzViNjEzMzY2NTFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
