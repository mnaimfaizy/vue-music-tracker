<template>
  <main>
    <!-- Hero Section -->
    <section class="mb-8 py-20 text-white text-center relative bg-gradient-to-r from-green-500 to-green-600">
      <div class="container mx-auto px-4">
        <h1 class="font-bold text-5xl mb-5">{{ $t('about.hero_title') }}</h1>
        <p class="text-xl opacity-90">{{ $t('about.hero_subtitle') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Introduction -->
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('about.what_is_title') }}</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-4">
            {{ $t('about.what_is_intro') }}
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ $t('about.what_is_outro') }}
          </p>
        </div>

        <!-- Features Grid -->
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ $t('about.features_title') }}</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Feature 1 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-upload text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_upload_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_upload_desc') }}
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-headphones text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_stream_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_stream_desc') }}
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-comments text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_community_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_community_desc') }}
              </p>
            </div>

            <!-- Feature 4 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-globe text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_language_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_language_desc') }}
              </p>
            </div>

            <!-- Feature 5 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-mobile-alt text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_pwa_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_pwa_desc') }}
              </p>
            </div>

            <!-- Feature 6 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div class="flex items-center mb-4">
                <i class="fas fa-shield-alt text-green-500 text-3xl mr-4"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('about.feature_secure_title') }}</h3>
              </div>
              <p class="text-gray-600">
                {{ $t('about.feature_secure_desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Technology Stack -->
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ $t('about.tech_title') }}</h2>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <i class="fab fa-vuejs text-green-500 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Vue 3</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_vue') }}</p>
            </div>
            <div>
              <i class="fas fa-fire text-orange-500 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Firebase</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_firebase') }}</p>
            </div>
            <div>
              <i class="fas fa-bolt text-purple-500 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Vite</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_vite') }}</p>
            </div>
            <div>
              <i class="fas fa-wind text-blue-400 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Tailwind CSS</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_tailwind') }}</p>
            </div>
            <div>
              <i class="fas fa-volume-up text-red-500 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">Howler.js</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_howler') }}</p>
            </div>
            <div>
              <i class="fas fa-check-circle text-green-600 text-5xl mb-3"></i>
              <h4 class="font-bold text-gray-800 mb-2">VeeValidate</h4>
              <p class="text-gray-600 text-sm">{{ $t('about.tech_veevalidate') }}</p>
            </div>
          </div>
        </div>

        <!-- Platform Limits -->
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-8 mb-8 border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            <i class="fas fa-info-circle text-yellow-500 mr-2"></i>{{ $t('about.limits_title') }}
          </h2>
          <p class="text-gray-700 mb-4" v-html="$t('about.limits_intro', ['<strong>', '</strong>'])"></p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>{{ $t('about.limits_tracks') }}</strong></li>
            <li><strong>{{ $t('about.limits_filesize') }}</strong></li>
            <li><strong>{{ $t('about.limits_format') }}</strong></li>
          </ul>
          <p class="text-gray-600 mt-4 text-sm">
            {{ $t('about.limits_note') }}
          </p>
        </div>

        <!-- Getting Started -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ $t('about.start_title') }}</h2>
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">{{ $t('about.start_step1_title') }}</h4>
                <p class="text-gray-600">{{ $t('about.start_step1_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">{{ $t('about.start_step2_title') }}</h4>
                <p class="text-gray-600">{{ $t('about.start_step2_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">{{ $t('about.start_step3_title') }}</h4>
                <p class="text-gray-600">{{ $t('about.start_step3_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
