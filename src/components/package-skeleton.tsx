import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PackageCardSkeleton() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-8 w-1/2" />
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Specs Skeleton */}
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-12" />
            </div>
          ))}
        </div>

        <div className="border-t pt-4" />

        {/* Equipment List Skeleton */}
        <div>
          <Skeleton className="h-4 w-1/2 mb-2" />
          <div className="space-y-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-3 w-2/3" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4" />

        {/* Appliances Skeleton */}
        <div>
          <Skeleton className="h-4 w-1/3 mb-2" />
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
          </div>
        </div>

        {/* Buttons Skeleton */}
        <div className="pt-2 space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function PackageDetailSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-32" />
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Pricing and Specs Skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Skeleton className="h-6 w-1/3 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-1/3 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Table Skeleton */}
        <div>
          <Skeleton className="h-6 w-1/3 mb-4" />
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-4 p-3 bg-muted">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4" />
              ))}
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 p-3 border-b">
                {Array.from({ length: 4 }).map((_, j) => (
                  <Skeleton key={j} className="h-4" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Appliances Skeleton */}
        <div>
          <Skeleton className="h-6 w-1/3 mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-8" />
            ))}
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </CardContent>
    </Card>
  )
}
